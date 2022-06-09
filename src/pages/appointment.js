import { Box } from '@mui/system'
import React from 'react'

import AdminLayout from '../components/AdminLayout'
import Head from "next/head";

export default function Appointment() {
  return (
   <Box>
    <Head>
    <title>APPOINMENT-PAGE</title>
    </Head>

    <div>Appointment page</div>
    </Box>
  )
}


Appointment.getLayout = function getLayout (page) {
  return <AdminLayout>
    {page}
  </AdminLayout>
}