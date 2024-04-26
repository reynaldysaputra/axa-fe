import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import CardComments from '../../../components/card-comments';
import { getUserCommentsOfPost, getUserPost } from '../../../services/user';

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

  return (
    <div className='p-10'>
      <h1 
        className='font-bold cursor-pointer mb-5'
        onClick={() => navigate(-1)}
      > 
        Back 
      </h1>
      
      <h2 className='font-bold text-2xl'>Detail Post User</h2>
      
      <div className='mt-14'>
        <h1 className='font-bold'>{post.title}</h1>
        <p>{post.body}</p>
      </div>

      <div className='my-10'>
        <hr />
      </div>

      <div>
        <h1 className='font-bold'>{comments.length} Comments</h1>
        {comments.length ? (
          comments.map(comment => 
            <CardComments key={comment.id} comment={comment}/>
          )
        ) : (
          <h1 className='px-5 font-bold'>No Posts User!</h1>
        )}
      </div>
    </div>
  )
}

export default UserPostPage