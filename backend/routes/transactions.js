import express from "express";
import Book from "../models/Book.js";
import BookTransaction from "../models/BookTransaction.js";

const router = express.Router();

/* ===========================
   ADD TRANSACTION (BORROW / RETURN)
=========================== */
router.post("/add-transaction", async (req, res) => {
  try {
    if (!req.body.isAdmin) {
      return res.status(403).json("Not authorized");
    }

    const {
      bookId,
      borrowerId,
      bookName,
      borrowerName,
      transactionType,
      fromDate,
      toDate,
    } = req.body;

    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json("Book not found");
    }

    /* BORROW */
    if (transactionType === "Borrow") {
      if (book.bookCountAvailable <= 0) {
        return res.status(400).json("Book not available");
      }

      book.bookCountAvailable -= 1;
      await book.save();
    }

    /* RETURN */
    if (transactionType === "Return") {
      book.bookCountAvailable += 1;
      await book.save();
    }

    const newTransaction = new BookTransaction({
      bookId,
      borrowerId,
      bookName,
      borrowerName,
      transactionType,
      fromDate,
      toDate,
    });

    const transaction = await newTransaction.save();

    book.transactions.push(transaction._id);
    await book.save();

    res.status(200).json(transaction);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

/* ===========================
   GET ALL TRANSACTIONS
=========================== */
router.get("/all-transactions", async (req, res) => {
  try {
    const transactions = await BookTransaction.find({})
      .populate("bookId")
      .sort({ _id: -1 });

    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* ===========================
   DELETE TRANSACTION
=========================== */
router.delete("/remove-transaction/:id", async (req, res) => {
  try {
    if (!req.body.isAdmin) {
      return res.status(403).json("Not authorized");
    }

    const transaction = await BookTransaction.findByIdAndDelete(
      req.params.id
    );

    if (!transaction) {
      return res.status(404).json("Transaction not found");
    }

    const book = await Book.findById(transaction.bookId);

    if (book) {
      book.transactions.pull(transaction._id);

      if (transaction.transactionType === "Borrow") {
        book.bookCountAvailable += 1;
      }

      await book.save();
    }

    res.status(200).json("Transaction deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;