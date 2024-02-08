import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import "../../../src/index.css";

const BooksTable = ({ books }) => {
  return (
    <div className="container book__container">
    <table className="books__table">
      <thead>
        <tr>
          <th className="table__head">No</th>
          <th className="table__head">Title</th>
          <th className="table__head">Author</th>
          <th className="table__head">Year</th>
          <th className="table__head">Operations</th>
        </tr>
      </thead>

      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="">
            <td className="table__body">{index + 1}</td>
            <td className="table__body">{book.title}</td>
            <td className="table__body">{book.author}</td>
            <td className="table__body">{book.publishYear}</td>
            <td className="table__body">
              <div className="operations">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="operation__icon" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="operation__icon" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="operation__icon" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default BooksTable;
