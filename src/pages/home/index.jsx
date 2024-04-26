import React from 'react'
import { useLoaderData } from 'react-router-dom';
import CardUser from '../../components/card-user'
import { getUsers } from '../../services/user';

export async function homeLoader() {
  const users = await getUsers();

  return { users: users.data };
}

function HomePage() {
  const { users } = useLoaderData();

  return (
    <div>
      <h1 className='px-5 font-bold text-2xl my-5'>List Users</h1>
      <div className='flex w-full flex-wrap'>
        {users.length ? (
          users.map(user => 
            <CardUser key={user.id} user={user}/>
          )
        ) : (
          <h1 className='px-5 font-bold'>No Data User!</h1>
        )}
      </div>
    </div>
  )
}

export default HomePage