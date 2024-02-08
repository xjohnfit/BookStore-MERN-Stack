import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit, AiTwotoneFileImage } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div key={book._id} className="singlebook">
      <h2 className="">{book.publishYear}</h2>
      <h4 className="">{book._id}</h4>
      <div className="">
        <PiBookOpenTextLight className="button__card" />
        <h2 className="book__desc">{book.title}</h2>
      </div>
      <div className="">
        <BiUserCircle className="button__card" />
        <h2 className="book__desc">{book.author}</h2>
      </div>
      <div className="operations__card">
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="button__card" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="button__card" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="button__card" />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
