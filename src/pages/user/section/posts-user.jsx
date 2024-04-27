import React from "react";
import Accordion from "../../../components/accordion";
import CardPost from "../../../components/card-post";
import { IoAddCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { openFormPost } from "../../../state/post-slice";
import FormModal from "../../../components/form-modal";

function PostsUserSection({ userPosts }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Accordion
        title={"Posts"}
        answer={
          <div className="w-full">
            <button
              className="mt-5 group rounded-md bg-white gap-4 border-green-500 border-2 flex justify-between items-center p-2 hover:bg-green-500 transition-all"
              onClick={() => dispatch(openFormPost(true))}
            >
              <h2 className="group-hover:text-white transition-all">
                Add Post
              </h2>
              <IoAddCircleOutline
                size={20}
                className="text-green-500 group-hover:text-white transition-all"
              />
            </button>

            {userPosts.length ? (
              <div className="w-full flex flex-wrap gap-10 my-5">
                {userPosts.map((post) => (
                  <CardPost key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <h1 className="px-5 font-bold">No Posts User!</h1>
            )}
          </div>
        }
      />

      {/* Modal Add Form */}
      <FormModal
        type={"post"}
      />
    </div>
  );
}

export default PostsUserSection;
