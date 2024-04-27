import React from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import CardPhoto from '../../components/card-photo';
import { getUserPhotosOfAlbums } from '../../services/user';

export const userPhotosOfAlbumLoader = async ({request}) => {
  const url = new URL(request.url);
  const pathname = url.pathname.split("/");
  const idAlbum = pathname[pathname.length-1];
  const photos = await getUserPhotosOfAlbums(idAlbum);

  return {
    photos: photos.data
  }
}

function UserAlbumPage() {
  const { photos } = useLoaderData();
  const navigate = useNavigate();
  let { state } = useLocation();

  return (
    <div className='p-10'>
      <h1 
        className='font-bold cursor-pointer mb-5'
        onClick={() => navigate(-1)}
      > 
        Back 
      </h1>

      <h1 className='font-bold text-2xl'>{photos.length} photos from the {state?.titleAlbum} Album</h1>
      {photos.length ? (
        <div className='flex flex-wrap gap-5 my-5'>
          {photos.map(photo => 
            <CardPhoto key={photo.id} photo={photo} />
          )}
        </div>
      ) : (
        <h1 className='px-5 font-bold'>No Photo User!</h1>
      )}
    </div>
  )
}

export default UserAlbumPage