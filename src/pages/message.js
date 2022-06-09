import React from 'react'
import Head from "next/head";
import { Box } from '@mui/system';
import AdminLayout from '../components/AdminLayout'

export default function Message() {
  return (
    <Box>
    <Head>
    <title>MESSAGE-PAGE</title>
    </Head>


    <div>message page</div>
    </Box>
  )
  
}


Message.getLayout = function getLayout (page) {
  return <AdminLayout>
    {page}
  </AdminLayout>
  
}