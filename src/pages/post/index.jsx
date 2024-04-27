import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getUserCommentsOfPost, getUserPost } from '../../services/user';
import { initialStateComment } from '../../state/comment-slice';
import CommentUserSection from './section/comment-user';
import DetailPostUserSection from './section/detail-post-user';

export const userPostLoader = async ({request}) => {
  const url = new URL(request.url);
  const pathname = url.pathname.split("/");
  const idUser = pathname[2];
  const idPost = pathname[pathname.length-1];
  const post = await getUserPost(idUser, idPost);
  const comments = await getUserCommentsOfPost(idPost);

  return {
    post: post.data[0],
    comments: comments.data
  }
}

function UserPostPage() {
  const {post, comments} = useLoaderData();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {dispatch(initialStateComment(comments))}, [])

  return (
    <div className='p-10'>
      <h1 
        className='font-bold cursor-pointer mb-5'
        onClick={() => navigate(-1)}
      > 
        Back 
      </h1>
      
      <h2 className='font-bold text-2xl'>Detail Post User</h2>
      
      <DetailPostUserSection post={post} />

      <div className='my-10'>
        <hr />
      </div>

      <CommentUserSection comments={comments} />
    </div>
  )
}

export default UserPostPage