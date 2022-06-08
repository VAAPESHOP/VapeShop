import React from 'react'

import AdminLayout from '../components/AdminLayout'

export default function Appointment() {
  return (
    <div>Appointment page</div>
  )
}


Appointment.getLayout = function getLayout (page) {
  return <AdminLayout>
    {page}
  </AdminLayout>
}