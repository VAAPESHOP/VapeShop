import { Box } from '@mui/system'
import React from 'react'
import Head from "next/head";

import AdminLayout from '../components/AdminLayout'
export default function Setting() {
  return (
    <Box>
    <Head>
    <title>APPOINMENT-PAGE</title>
    </Head>
    <div>settings page</div>
    </Box>
  )
}
Setting.getLayout = function getLayout(page){
return <AdminLayout>
  {page}
</AdminLayout>
}