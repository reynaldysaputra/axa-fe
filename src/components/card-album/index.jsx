import React from "react";
import { Link, useLocation } from "react-router-dom";

function CardAlbum({ album }) {
  const { id = 1, title } = album;
  const location = useLocation();

  return (
    <Link to={`${location.pathname}/album/${id}`} state={{ titleAlbum: title }}>
      <div className="w-auto p-10 shadow-md rounded-md bg-white cursor-pointer hover:shadow-sm transition">
        <p className="font-bold text-1xl">{title}</p>
      </div>
    </Link>
  );
}

export default CardAlbum;
