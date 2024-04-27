import React from 'react'
import Modal from "react-modal";
import { useDispatch, useSelector } from 'react-redux';
import { editFormComment, openFormComment } from '../../state/comment-slice';
import { editFormPost, openFormPost } from '../../state/post-slice';

function FormModal({type}) {
  const {isOpenFormPost, isEditFormPost} = useSelector((state) => state.post);
  const {isOpenFormComment, isEditFormComment} = useSelector((state) => state.comment);
  const dispatch = useDispatch();

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
          }}
        >
          <h1>X</h1>
        </div>

        {type === "post" ? (
          <>          
            {isEditFormPost ? 
              <h1 className="font-bold text-2xl mb-5">Edit Post</h1> : 
              <h1 className="font-bold text-2xl mb-5">Add New Post</h1>
            }

            <form>
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Title"
                  type="text"
                  placeholder="Title"
                />
              </div>
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Body"
                  type="text"
                  placeholder="Body"
                />
              </div>
              <button 
                className="w-full bg-blue-500 p-3 text-white"
              >
                {isEditFormPost ? "Edit Post" : "Add Post"}
              </button>
            </form>
          </>
        ) : (
          <>
            {isEditFormComment ? 
              <h1 className="font-bold text-2xl mb-5">Edit Comment</h1> : 
              <h1 className="font-bold text-2xl mb-5">Add New Comment</h1>
            }

            <form>
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Comment"
                  type="text"
                  placeholder="comment"
                />
              </div>
              <button 
                className="w-full bg-blue-500 p-3 text-white"
              >
                Add Comment
              </button>
            </form>
          </>
        )}
      </div>
    </Modal>
  )
}

export default FormModal