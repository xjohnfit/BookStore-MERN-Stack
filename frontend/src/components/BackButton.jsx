import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex ">
      <Link
        to={destination}
        className="back__button"
      >
        <BsArrowLeft className="text-2x1" />
      </Link>
    </div>
  );
};

export default BackButton;
