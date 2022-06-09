import { Box } from '@mui/system'
import React from 'react'
import Head from "next/head";

import AdminLayout from '../components/AdminLayout'



export default function Users() {
  return (
    <Box>
    <Head>
    <title>USER-PAGE</title>
    </Head>
    <div>users page</div>
    </Box>
  )
  
}



Users.getLayout = function getLayout (page) {
  return <AdminLayout>
    {page}
  </AdminLayout>
}