import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Allbooks.css";

function Allbooks() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get(API_URL + "api/books/allbooks");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBooks();
  }, [API_URL]);

  return (
    <div className="books-page">
      <div className="books">
        {books.map((book) => (
          <div className="book-card" key={book._id}>
            <img
              src="https://via.placeholder.com/150"
              alt="book"
            />
            <p className="bookcard-title">{book.bookName}</p>
            <p className="bookcard-author">By {book.author}</p>
            <div className="bookcard-category">
              <p>
                {book.bookCountAvailable > 0
                  ? `Available: ${book.bookCountAvailable}`
                  : "Not Available"}
              </p>
            </div>
            <div className="bookcard-emptybox"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Allbooks;