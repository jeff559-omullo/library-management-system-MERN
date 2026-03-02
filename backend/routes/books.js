import express from "express";
import Book from "../models/Book.js";
import BookCategory from "../models/BookCategory.js";

const router = express.Router();

/* ===========================
   GET ALL BOOKS
=========================== */
router.get("/allbooks", async (req, res) => {
  try {
    const books = await Book.find({})
      .populate("transactions")
      .sort({ _id: -1 });

    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* ===========================
   GET BOOK BY ID
=========================== */
router.get("/getbook/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("transactions");

    if (!book) {
      return res.status(404).json("Book not found");
    }

    res.status(200).json(book);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* ===========================
   ADD BOOK
=========================== */
router.post("/addbook", async (req, res) => {
  if (!req.body.isAdmin) {
    return res.status(403).json("Not authorized");
  }

  try {
    const newBook = new Book({
      bookName: req.body.bookName,
      alternateTitle: req.body.alternateTitle,
      author: req.body.author,
      bookCountAvailable: Number(req.body.bookCountAvailable),
      language: req.body.language,
      publisher: req.body.publisher,
      bookStatus: "Available",
      categories: req.body.categories,
    });

    const book = await newBook.save();

    await BookCategory.updateMany(
      { _id: book.categories },
      { $push: { books: book._id } }
    );

    res.status(200).json(book);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* ===========================
   UPDATE BOOK
=========================== */
router.put("/updatebook/:id", async (req, res) => {
  if (!req.body.isAdmin) {
    return res.status(403).json("Not authorized");
  }

  try {
    await Book.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    res.status(200).json("Book updated successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

/* ===========================
   DELETE BOOK
=========================== */
router.delete("/removebook/:id", async (req, res) => {
  if (!req.body.isAdmin) {
    return res.status(403).json("Not authorized");
  }

  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json("Book not found");
    }

    await BookCategory.updateMany(
      { _id: book.categories },
      { $pull: { books: book._id } }
    );

    res.status(200).json("Book deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;