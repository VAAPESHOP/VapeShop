import { Box, Grid, Paper, Typography } from '@mui/material'

import AdminLayout from '../components/AdminLayout'

import Image from "next/image";
import Head from "next/head";

export default function Dashboard() {


  const style = {
    paper1:{
      padding: "24px",
      backgroundColor: (theme) => theme.palette.dashboard.bg1,
    },
    paper2:{
      padding: "24px",
      backgroundColor: (theme) => theme.palette.dashboard.bg2,
    },
    paper3:{
      padding: "24px",
      backgroundColor: (theme) => theme.palette.dashboard.bg3,
    },
    text1:{
      fontWeight: "500",
      color: (theme) => theme.palette.text.t2,
    },
    text2:{
      fontWeight: "700",
      color: (theme) => theme.palette.text.t2,
    },
  }
  return (
  <Box sx={{padding: "0 24px"}}>
    <Box sx= {{display: "flex", alignItems: "center"}}>
    <Image src= "/assets/svg/dashboard.svg" alt="dashboard" width={30} height={30} />
    <Typography variant= "h1" sx={{marginLeft:"12px"}}>Dashboard</Typography>
    <Head>
    <title>DASHBOARD-PAGE</title>
    </Head>
    </Box>
    
    
    <Grid container spacing= {2} sx={{marginTop:"2px"}}>
      <Grid item xs={12} sm>
      <Paper sx={style.paper1}>
        <Typography variant = "h3" sx={style.text1}> Users </Typography>
        <Typography variant = "h1" sx= {style.text2}>
           100
           </Typography>
      </Paper>
      </Grid>

     <Grid item xs={12} sm>
     <Paper sx={style.paper2}>
        <Typography variant = "h3" sx={style.text1}> Messages </Typography>
        <Typography variant = "h1"sx= {style.text2}>
           322 
           </Typography>
      </Paper>
     </Grid>

     <Grid item xs={12} sm>
     <Paper sx={style.paper3}>
        <Typography variant = "h3" sx={style.text1}> Appointments </Typography>
        <Typography variant = "h1"sx= {style.text2}>
           10 
           </Typography>
      </Paper>
     </Grid>

    </Grid>
  </Box>
    
  );
}
Dashboard.getLayout = function getLayout(page){
return <AdminLayout>
  {page}
</AdminLayout>
}