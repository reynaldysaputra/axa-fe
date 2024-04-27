import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getUserAlbums, getUserDetail, getUserPosts } from '../../services/user';
import DetailUserSection from './section/detail-user';
import PostsUserSection from './section/posts-user';
import AlbumsUserSection from './section/albums-user';

export const userLoader = async ({ request }) => {
  const url = new URL(request.url);
  const pathname = url.pathname.split("/");
  const id = pathname[pathname.length-1];
  const [user, post, albums] = await Promise.all([
    getUserDetail(id),
    getUserPosts(id),
    getUserAlbums(id)
  ])

  return { 
    userDetail: user.data,
    userPosts: post.data,
    userAlbums: albums.data
  };
}

function UserPage() {
  const { userDetail, userPosts, userAlbums } = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className='w-full p-10'>
      <h1 
        className='font-bold cursor-pointer mb-5'
        onClick={() => navigate(-1)}
      > 
        Back 
      </h1>

      {/* Section Detail of User */}
      <DetailUserSection userDetail={userDetail} />

      {/* Section Accordion Posts and Albums */}
      <section className='w-full border-black border-t-2 my-10 py-5'>
        <PostsUserSection userPosts={userPosts} />

        <AlbumsUserSection userAlbums={userAlbums} />
      </section>
    </div>
  )
}

export default UserPage