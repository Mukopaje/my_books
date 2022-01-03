import React from "react";
import ReactDom from "react-dom";

// Css
import "./index.css";

import { books } from "./books";
import Book from "./Book";

export const MyBookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} />;
      })}
    </section>
  );
};

ReactDom.render(<MyBookList />, document.getElementById("root"));
