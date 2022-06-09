
import { Box, Paper, Typography, Grid, Card, CardHeader, Avatar, CardMedia, CardContent, CardActions, IconButton, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Divider, } from '@mui/material';
import AdminLayout from '../components/AdminLayout';
import Head from "next/head";

import Image from "next/image";
import { Comment, Favorite, MoreVert, Share, ShoppingCart } from '@mui/icons-material';
import { Star } from '@mui/icons-material';
export default function Homepage() {

  return (
      <Box
      
      flex={1} 
      p={3} 
      sx={{ minWidth:"50px", display: "flex", flexDirection: "column", width: "98vw", height: "88.3vh" }} style={{color:"white"}}>
<Head>
    <title>MARKET-PAGE</title>
    </Head>

    

      <Grid container spacing={2}>

      <Stack direction="row" spacing={1} justifyContent="space-between">
      <List>
      
        <Divider/>

          <ListItem disablePadding>
            <ListItemButton>   
              <ListItemText primary="" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="" />
            </ListItemButton>
          </ListItem>
          
         

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="" />
            </ListItemButton>
          </ListItem>

       </List>
       </Stack>
      
       <Grid item xs={120} sm>
       <Card sx={{ backgroundColor:"white", alignItems:"center"}}>
       <CardHeader
        
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        
      
        
      />
      <CardMedia
        component="img"
        height="200px"
        image="/img/vapee.jpg"
        alt="Aegis Regent v2. "
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          Aegis Regent v2. 
        </Typography>

        <Typography variant="h6" color="text.secondary">
         Price ₱1,999
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Ratings 100%        
        </Typography>

          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="favorites">
          <Favorite/>
        </IconButton>

        <IconButton aria-label="comment">
          <Comment/>
        </IconButton>

        <IconButton aria-label="share">
          <Share/>
        </IconButton>

        <IconButton aria-label="cart">
          <ShoppingCart/>
        </IconButton>

      </CardActions>
          </Card>
            </Grid>

        <Grid item xs={120} sm>
       <Card sx={{ backgroundColor:"white", alignItems:"center"}}>
       <CardHeader
       
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        
      />
      <CardMedia
        component="img"
        height="200px"
        image="/img/vape2.jpg"
        alt="Vape Pod"
      />
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          Vape Pod
        </Typography>

        <Typography variant="h6" color="text.secondary">
         Price ₱699
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Ratings 100%        
        </Typography>

          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="favorites">
          <Favorite/>
        </IconButton>

        <IconButton aria-label="comment">
          <Comment/>
        </IconButton>

        <IconButton aria-label="share">
          <Share/>
        </IconButton>

        <IconButton aria-label="cart">
          <ShoppingCart/>
        </IconButton>

      </CardActions>
    </Card>
            </Grid>

       <Grid item xs={120} sm>
       <Card sx={{ backgroundColor:"white", alignItems:"center"}}>
       <CardHeader
       
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        
        
      />
      <CardMedia
        component="img"
        height="200px"
        image="/img/vape3.jpeg"
        alt="VooPoo Drag 3"
      />
      <CardContent>
        <Typography variant="h5" color="text.secondary">
        VooPoo Drag 3
        </Typography>

        <Typography variant="h6" color="text.secondary">
         Price ₱3,999
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Ratings 80%        
        </Typography>

          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star/>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="favorites">
          <Favorite/>
        </IconButton>

        <IconButton aria-label="comment">
          <Comment/>
        </IconButton>

        <IconButton aria-label="share">
          <Share/>
        </IconButton>

        <IconButton aria-label="cart">
          <ShoppingCart/>
        </IconButton>

      </CardActions>
    </Card>
            </Grid>
       </Grid>


       <Stack direction="row" spacing={2} justifyContent="space-between">

        <Grid item xs={120} sm>
       <Card sx={{ backgroundColor:"white", alignItems:"center"}}>
       <CardHeader
       
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        
        
      />
      <CardMedia
        component="img"
        height="200px"
        image="/img/vape4.jpeg"
        alt="Smok ArcFox 230W"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
        Smok ArcFox 230W
        </Typography>

        <Typography variant="h6" color="text.secondary">
         Price ₱6,999
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Ratings 100%        
        </Typography>

          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="favorites">
          <Favorite/>
        </IconButton>

        <IconButton aria-label="comment">
          <Comment/>
        </IconButton>

        <IconButton aria-label="share">
          <Share/>
        </IconButton>

        <IconButton aria-label="cart">
          <ShoppingCart/>
        </IconButton>

      </CardActions>
          </Card>
            </Grid>

        <Grid item xs={120} sm>
       <Card sx={{ backgroundColor:"white", alignItems:"center"}}>
       <CardHeader
      
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }

        
        
      />
      <CardMedia
        component="img"
        height="200px"
        image="/img/vape5.webp"
        alt="Innokin MVP5 120W Box Mod."
      />
      <CardContent>
        <Typography variant="h5" color="text.secondary">
        Innokin MVP5 120W Box Mod.
        </Typography>

        <Typography variant="h6" color="text.secondary">
         Price ₱7,999
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Ratings 100%        
        </Typography>

          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="favorites">
          <Favorite/>
        </IconButton>

        <IconButton aria-label="comment">
          <Comment/>
        </IconButton>

        <IconButton aria-label="share">
          <Share/>
        </IconButton>

        <IconButton aria-label="cart">
          <ShoppingCart/>
        </IconButton>

      </CardActions>
    </Card>
            </Grid>

        <Grid item xs={120} sm>
       <Card sx={{ backgroundColor:"white", alignItems:"center"}}>
       <CardHeader
        
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        

      />
      <CardMedia
        component="img"
        height="200px"
        image="/img/vape6.jpg"
        alt="VooPoo Drag X Plus."
      />
      <CardContent>
        <Typography variant="h5" color="text.secondary">
        VooPoo Drag X Plus.
        </Typography>

        <Typography variant="h6" color="text.secondary">
         Price ₱3,999
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Ratings 100%        
        </Typography>

          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
          <Star sx={{color:"yellow"}}/>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="favorites">
          <Favorite/>
        </IconButton>

        <IconButton aria-label="comment">
          <Comment/>
        </IconButton>

        <IconButton aria-label="share">
          <Share/>
        </IconButton>

        <IconButton aria-label="cart">
          <ShoppingCart/>
        </IconButton>

      </CardActions>
    </Card>
            </Grid>
            
 </Stack>
 
     </Box>
  );
}


Homepage.getLayout = function getLayout(page){
   return <AdminLayout>{page}</AdminLayout>;
};