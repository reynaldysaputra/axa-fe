import React from 'react'
import DetailUser from '../../../components/detail-user'

function DetailUserSection({userDetail}) {
  return (
    <section>
      <h1 className='font-bold text-2xl mb-2'>Detail User</h1>
      <DetailUser
        label={"Name"}
        value={userDetail.name}
      />
      <DetailUser
        label={"Username"}
        value={userDetail.username}
      />
      <DetailUser
        label={"Email"}
        value={userDetail.email}
      />
      <DetailUser
        label={"Phone Number"}
        value={userDetail.phone}
      />
      <DetailUser
        label={"Website"}
        value={userDetail.website}
      />
      <DetailUser
        label={"Company"}
        value={userDetail.company.name}
      />
    </section>
  )
}

export default DetailUserSection