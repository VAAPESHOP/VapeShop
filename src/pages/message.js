import React from 'react'

import AdminLayout from '../components/AdminLayout'

export default function Message() {
  return (
    <div>message page</div>
  )
}


Message.getLayout = function getLayout (page) {
  return <AdminLayout>
    {page}
  </AdminLayout>
}