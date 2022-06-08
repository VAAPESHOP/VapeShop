import { AppBar, 
  Box,
  ButtonBase, 
  Drawer, 
  IconButton, 
  Toolbar, 
  Typography,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  AvatarGroup,
  Tooltip,
 
 
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";


import { useState } from "react";

export default function AdminLayout({ children }) {
const router = useRouter();
const [open, setOpen] = useState(false);


const setDrawerOpen = () => {
setOpen(true);
};

const handleClose = () => {
setOpen(false);
};

const drawerGotoPage =(url)=>{
  setOpen(false);
  router.push(url)
}

return (
<Box>
<Head>
<title>Admin-Dashboard</title>
</Head>


<AppBar>
<Toolbar>
<IconButton onClick={setDrawerOpen}>
<Image
src="/assets/svg/bars.svg" 
alt="bars" 
width={30}  
height={30}
/>
</IconButton>

<Typography variant="h2" sx={{marginLeft: "12px"}}>VapeShop</Typography>
</Toolbar>
</AppBar>
<Drawer anchor="left"  open={open} onClose={handleClose}>
<Box
sx={{ minWidth: "200px", height: "100vh", display: "flex", flexDirection: "column",}}
>

<Box sx={{ padding: "12px", display: "flex"}}>
<Avatar/>
<Box sx={{ marginleft: "8px"}}>
<Tooltip title="vapeshop@gmail.com"> 
<Typography color ="primary" noWrap sx={{maxWidth: "150px"}}>
vapeshop@gmail.com
</Typography>
</Tooltip>

<Typography color="secondary">Admin</Typography>


</Box>
</Box>
<List sx={{ flexGrow: 1 }}>
<Divider/>

<ListItem button onClick={()=> drawerGotoPage ("/dashboard")}
selected={router.pathname.includes("dashboard")}
>
<ListItemIcon>
<Image src="/assets/svg/dashboard.svg" alt="dashboard" width={25} height={25} />
</ListItemIcon>
<ListItemText primary="Dashboard"/>
</ListItem>

<ListItem button onClick={()=> drawerGotoPage ("/users")}
selected={router.pathname.includes("users")}
>
<ListItemIcon>
<Image src="/assets/svg/users.svg" alt="users" width={25} height={25} />
</ListItemIcon>
<ListItemText primary="Users"/>
</ListItem>

<ListItem button onClick={()=> drawerGotoPage ("/message")}
selected={router.pathname.includes("message")}
>
<ListItemIcon>
<Image src="/assets/svg/chat.svg" alt="Message" width={25} height={25} />
</ListItemIcon>
<ListItemText primary="Message"/>
</ListItem>

<ListItem button onClick={()=> drawerGotoPage ("/appointment")}
selected={router.pathname.includes("appointment")}
>
<ListItemIcon>
<Image src="/assets/svg/appoinment.svg" alt="appoinment" width={25} height={25} />
</ListItemIcon>
<ListItemText primary="Appoinment"/>
</ListItem>

<Divider/>
<ListItem button onClick={()=> drawerGotoPage ("/setting")}
selected={router.pathname.includes("setting")}
>
<ListItemIcon>
<Image src="/assets/svg/setting.svg" alt="setting" width={25} height={25} />
</ListItemIcon>
<ListItemText primary="Settings"/>
</ListItem>

</List>



<List>
<ListItem button>
<ListItemIcon>
<Image src="/assets/svg/signouts.svg" alt="signout" width={25} height={25} />
</ListItemIcon>
<ListItemText primary="Signout"/>
</ListItem>





</List>


</Box>
</Drawer>


<Box sx={{marginTop: "80px"}}>
{children}
</Box>
</Box>



);

}