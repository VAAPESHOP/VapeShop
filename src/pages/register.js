import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";

import global from "../styles/global";
const style = {
  linkStyle: {
    cursor: "pointer",
    color: "primary.main",
  },
};
export default function Register() {
  const router = useRouter();

  const gotoSignIn = () => {
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
      <Box>
        <Typography variant="h5">Create new account</Typography>
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
        <TextField label="Email Address" type="email" />

        <TextField
          label="Password"
          name="password"
          type="password"
          sx={{ marginTop: "12px" }}
        />

        <TextField
          label="Confirm password"
          name="Confirm password"
          type="password"
          sx={{ marginTop: "12px" }}
        />

        <Button 
        variant="contained" 
        sx={{...global.button1, marginTop: "12px" }}>
          Register
        </Button>


         {/* additional option */}

         <Box
          sx={{ display: "flex", justifyContent: "right", marginTop: "10px" }}
        >
          <Typography 
          variant="subtitle2"
           onClick={() => router.push("/sign-in")}>
               Already have an account? Please
            <Typography
              sx={style.linkStyle}>
                 Sign in
            </Typography>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}