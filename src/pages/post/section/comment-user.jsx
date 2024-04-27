import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import CardComments from "../../../components/card-comments";
import FormModal from "../../../components/form-modal";
import { openFormComment } from "../../../state/comment-slice";

function CommentUserSection() {
  const dispatch = useDispatch();
  const { userComments } = useSelector((state) => state.comment);

  return (
    <div>
      <button
        className="mb-5 group rounded-md bg-white gap-4 border-green-500 border-2 flex justify-between items-center p-2 hover:bg-green-500 transition-all"
        onClick={() => {
          dispatch(openFormComment(true));
        }}
      >
        <h2 className="group-hover:text-white transition-all text-sm">
          Add Comment
        </h2>
        <IoAddCircleOutline
          size={20}
          className="text-green-500 group-hover:text-white transition-all"
        />
      </button>

      <h1 className="font-bold">{userComments.length} Comments</h1>
      {userComments.length ? (
        userComments.map((comment) => (
          <CardComments key={comment.id} comment={comment} />
        ))
      ) : (
        <h1 className="mt-5 font-bold">No Posts User!</h1>
      )}

      {/* Modal Add Form */}
      <FormModal type={"comment"} />
    </div>
  );
}

export default CommentUserSection;
