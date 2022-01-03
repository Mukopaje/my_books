import React from "react";

const Book = (book) => {
  return (
    <article className="book">
      <div>
        <img src={book.img} alt="" />
        <h1>{book.title}</h1>
        <h4>{book.author}</h4>
      </div>
    </article>
  );
};

export default Book;
