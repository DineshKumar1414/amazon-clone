import { React, useEffect, useState,useCallback } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import productsApi from '../../components/api/products';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation, useNavigate  } from "react-router-dom";


const theme = createTheme();

export default function Register() {
  const history = useNavigate();
  const [error, setError] = useState(null);


  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      confirmpassword: data.get('confirmpassword'),
      firstname:data.get('firstName'),
      lastname:data.get('lastName')
    });
    var payload={
      email:data.get('email'),
      username:data.get('firstName'),
      password:data.get('password'),
      name:{
          firstname:data.get('firstName'),
          lastname:data.get('lastName')
      },
      // address:{
      //     city:'kilcoole',
      //     street:'7835 new road',
      //     number:3,
      //     zipcode:'12926-3874',
      //     geolocation:{
      //         lat:'-37.3159',
      //         long:'81.1496'
      //     }
      // },
      // phone:'1-570-236-7033'
    }
    try {
      
      console.log(payload)
      const json = await productsApi.register(payload);
      console.log(json)
      history("signin", { replace: true });
    } catch (_error) {
      setError(_error);
    }
  };
  const userRegister = useCallback(async () => {
    
   
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container style={{backgroundColor:"#DB7210",padding:"0px"}} component="main" maxWidth="xs">
        <CssBaseline />
        <br /> <br />
        <Typography color="#ffffff" align='left' fontWeight='500' fontSize="20px"  variant="p">
         &emsp;  Register Now
          </Typography>
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            backgroundColor:'#ffffff',
            borderTopLeftRadius:"20px",
            borderTopRightRadius:"20px",
            padding:"20px",
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
         
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmpassword"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="By signing up You agree to accept terms of service and Privacy Policy."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              onClick={userRegister}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}