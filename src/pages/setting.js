import React from 'react'

import AdminLayout from '../components/AdminLayout'
export default function Setting() {
  return (
    <div>settings page</div>
  )
}
Setting.getLayout = function getLayout(page){
return <AdminLayout>
  {page}
</AdminLayout>
}