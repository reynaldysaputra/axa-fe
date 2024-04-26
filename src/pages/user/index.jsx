import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Accordion from '../../components/accordion';
import CardAlbum from '../../components/card-album';
import CardPost from '../../components/card-post';
import { getUserAlbums, getUserDetail, getUserPosts } from '../../services/user';

export const userLoader = async ({ request }) => {
  const url = new URL(request.url);
  const pathname = url.pathname.split("/");
  const id = pathname[pathname.length-1];
  const user = await getUserDetail(id);
  const post = await getUserPosts(id);
  const albums = await getUserAlbums(id);

  return { 
    userDetail: user.data,
    userPosts: post.data,
    userAlbums: albums.data
  };
}

function UserPage() {
  const { userDetail, userPosts, userAlbums } = useLoaderData();
  const {name, username, email, phone, website, company} = userDetail;
  let navigate = useNavigate();

  return (
    <div className='w-full p-10'>
      <h1 
        className='font-bold cursor-pointer mb-5'
        onClick={() => navigate(-1)}
      > 
        Back 
      </h1>

      <section>
        <h1 className='font-bold text-2xl mb-2'>Detail User</h1>
        <h2 className='font-bold flex'>
          Name: &nbsp; 
          <p className="font-normal">{name}</p>        
        </h2>
        <h2 className='font-bold flex'>
          Username: &nbsp;   
          <p className="font-normal">{username}</p>              
        </h2>
        <h2 className='font-bold flex'>
          Email: &nbsp;         
          <p className="font-normal">{email}</p>        
        </h2>
        <h2 className='font-bold flex'>
          Phone: &nbsp;         
          <p className="font-normal">{phone}</p>        
        </h2>
        <h2 className='font-bold flex'>
          Website: &nbsp;
          <p className="font-normal">{website}</p>        
        </h2>
        <h2 className='font-bold flex'>
          Company: &nbsp;    
          <p className="font-normal">{company?.name}</p>             
        </h2>
      </section>

      <section className='w-full border-black border-t-2 my-10 py-5'>
        <Accordion
          title={"Posts"}
          answer={(
            <div className='w-full flex flex-wrap gap-10 my-5'>
              {userPosts.length ? (
                userPosts.map(post => 
                  <CardPost key={post.id} post={post}/>
                )
              ) : (
                <h1 className='px-5 font-bold'>No Posts User!</h1>
              )}
            </div>
          )}
        />   

        <Accordion
          title={"Album"}
          answer={(
            <div className='w-full flex flex-wrap gap-10 my-5'>
              {userAlbums.length ? (
                userAlbums.map(album => 
                  <CardAlbum key={album.id} album={album} />
                )
              ) : (
                <h1 className='px-5 font-bold'>No Albums User!</h1>
              )}
            </div>
          )}
        />     
      </section>
    </div>
  )
}

export default UserPage