import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewComment,
  editComment,
  editFormComment,
  openFormComment,
  updateStateFormComment,
} from "../../state/comment-slice";
import {
  addNewPost,
  editFormPost,
  editPost,
  openFormPost,
  updateStateFormPost,
} from "../../state/post-slice";

function FormModal({ type }) {
  const dispatch = useDispatch();
  const { isOpenFormPost, isEditFormPost, stateFormPost } = useSelector(
    (state) => state.post
  );
  const { isOpenFormComment, isEditFormComment, stateFormComment } = useSelector(
    (state) => state.comment
  );

  const handleFormPost = (e) => {
    e.preventDefault();
    const userId = window.location.pathname.split("/").length - 1;

    dispatch(
      isEditFormPost
        ? editPost({
            id: stateFormPost.id,
            title: stateFormPost.title,
            body: stateFormPost.body,
          })
        : addNewPost({
            userId,
            title: stateFormPost.title,
            body: stateFormPost.body,
          })
    );

    dispatch(updateStateFormPost("", ""));
  };

  const handleFormComment = (e) => {
    e.preventDefault();
    const userId = window.location.pathname.split("/").length - 1;

    dispatch(
      isEditFormComment
        ? editComment({
            id: stateFormComment.id,
            email: stateFormComment.email,
            name: stateFormComment.name,
            body: stateFormComment.body,
          })
        : addNewComment({
            userId,
            email: stateFormComment.email,
            name: stateFormComment.name,
            body: stateFormComment.body,
          })
    );

    dispatch(updateStateFormComment("", "", ""));
  };

  return (
    <Modal
      isOpen={isOpenFormPost || isOpenFormComment}
      ariaHideApp={false}
      className="w-full h-screen bg-black/60 flex justify-center items-center"
    >
      <div className="w-[90%] lg:w-[50%] bg-white p-10 relative">
        <div
          className="absolute top-10 right-10 cursor-pointer"
          onClick={() => {
            dispatch(openFormPost(false));
            dispatch(editFormPost(false));
            dispatch(openFormComment(false));
            dispatch(editFormComment(false));
            dispatch(updateStateFormPost("", ""));
            dispatch(updateStateFormComment("", "", ""));
          }}
        >
          <h1>X</h1>
        </div>

        {type === "post" ? (
          <>
            {isEditFormPost ? (
              <h1 className="font-bold text-2xl mb-5">Edit Post</h1>
            ) : (
              <h1 className="font-bold text-2xl mb-5">Add New Post</h1>
            )}

            <form onSubmit={handleFormPost}>
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Title"
                  type="text"
                  placeholder="Title"
                  defaultValue={stateFormPost.title}
                  onChange={(e) =>
                    dispatch(
                      updateStateFormPost({
                        id: stateFormPost.id,
                        title: e.target.value,
                        body: stateFormPost.body,
                      })
                    )
                  }
                />
              </div>
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Body"
                  type="text"
                  placeholder="Body"
                  defaultValue={stateFormPost.body}
                  onChange={(e) =>
                    dispatch(
                      updateStateFormPost({
                        id: stateFormPost.id,
                        title: stateFormPost.title,
                        body: e.target.value,
                      })
                    )
                  }
                />
              </div>
              <button className="w-full bg-blue-500 p-3 text-white">
                {isEditFormPost ? "Edit Post" : "Add Post"}
              </button>
            </form>
          </>
        ) : (
          <>
            {isEditFormComment ? (
              <h1 className="font-bold text-2xl mb-5">Edit Comment</h1>
            ) : (
              <h1 className="font-bold text-2xl mb-5">Add New Comment</h1>
            )}

            <form onSubmit={handleFormComment}>
              <div className="mb-4">
                <input
                  className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Email"
                  type="email"
                  placeholder="email"
                  defaultValue={stateFormComment.email}
                  onChange={(e) =>
                    dispatch(
                      updateStateFormComment({
                        id: stateFormComment.id,
                        email: e.target.value,
                        name: stateFormComment.name,
                        body: stateFormComment.body,
                      })
                    )
                  }
                />
                <input
                  className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Name"
                  type="text"
                  placeholder="name"
                  defaultValue={stateFormComment.name}
                  onChange={(e) =>
                    dispatch(
                      updateStateFormComment({
                        id: stateFormComment.id,
                        email: stateFormComment.email,
                        name: e.target.value,
                        body: stateFormComment.body,
                      })
                    )
                  }
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Comment"
                  type="text"
                  placeholder="comment"
                  defaultValue={stateFormComment.body}
                  onChange={(e) =>
                    dispatch(
                      updateStateFormComment({
                        id: stateFormComment.id,
                        email: stateFormComment.email,
                        name: stateFormComment.name,
                        body: e.target.value,
                      })
                    )
                  }
                />
              </div>
              <button className="w-full bg-blue-500 p-3 text-white">
                {isEditFormComment ? "Edit Comment" : "Add Comment"}
              </button>
            </form>
          </>
        )}
      </div>
    </Modal>
  );
}

export default FormModal;
