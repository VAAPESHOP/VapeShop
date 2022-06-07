import { 
  Box,
  Button,
  Paper,
  TextField, 
  Typography, 
  Snackbar,
  Alert,
 } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

import global from "../styles/global";

import Head from "next/head";

const style = {
  linkStyle: {
    cursor: "pointer",
    color: "primary.main",
  },
};

export default function SignIn() {
  const router = useRouter();

  const initialState= {
    email: "",
    password: "",
  };
const [state, setState] = useState(initialState);

const messageInitialState= {
 text:"",
 serevity:"",
}
const [message, setMessage] = useState (messageInitialState);
const [open, setOpen] = useState(false);

  const gotoRegister = () => {
    router.push("/register");
  };

  const handleChange =(prop) => (e) => {
    setState (prevItem => ({
      ...prevItem,
       [prop]: e.target.value,
    }));
  };


  const signIn  = ()=> {
    const admin = "admin@email.com";
    const password = "admin123";

    if (state.email === admin && state.password === password) {
      setMessage({
        text: "Logged in Successful",
        severity: "success"
      });
      setOpen(true);
    }else { 
      setMessage({
        text: "Wrong email / Password",
        severity: "error",
      });
      setOpen(true);
  }
};

  const handleClose = () => {
    setOpen (false);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
       <Head>
        <title>Vape Sign-in</title>
      </Head>
      <Box>
        <Typography variant="h3">Please Sign In</Typography>
      </Box>

      <Paper
        elevation={3}
        sx={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          marginTop: "12px",
        }}
      >
        <TextField 
        label="Email Address" 
        type="email" 
        onChange={handleChange("email")}/>

        <TextField
          label="Password"
          type="password"
          sx={{ marginTop: "12px" }}
          onChange= {handleChange("password")}
        />

        <Button variant="contained" sx={{...global.button1, marginTop: "12px" }} onClick ={signIn}>
          Sign in
        </Button>

        {/* additional option */}

        <Box
          sx={{ display: "flex", justifyContent: "right", marginTop: "10px" }}
        >
          <Typography 
          variant="subtitle2" 
          onClick={gotoRegister} 
          sx={style.linkStyle}
          >
            Create new account
          </Typography>
        </Box>
      </Paper>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        >
        <Alert 
        onClose={handleClose}
        severity={message.severity}
        sx={{ width: "100%"}}
        >
          {message.text}
        </Alert>
        </Snackbar>
    </Box>
  );
}
