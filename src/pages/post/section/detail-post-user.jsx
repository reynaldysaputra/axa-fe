import React from "react";

function DetailPostUserSection({ post }) {
  return (
    <div className="mt-14">
      <h1 className="font-bold">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default DetailPostUserSection;
