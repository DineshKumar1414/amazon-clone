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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import productsApi from '../../components/api/products';
import { useLocation, useNavigate  } from "react-router-dom";

const theme = createTheme();

export default function SignIn() {
  const location = useLocation();
  const history = useNavigate();
  const [error, setError] = useState(null);
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('email'),
      password: data.get('password'),
    });
    var payload={

      username: data.get('email'),
      password: data.get('password'),
      
    }
    try {
      history.push({
        pathname: "/products",
        // search:
        //   "customer_key=" +
        //   params.customer_key 
         
      });
      history("/products", { replace: true });
      console.log(payload)
      const json = await productsApi.login(payload);
      console.log(json)
    } catch (_error) {
      setError(_error);
      console.log(_error)
      history("/products", { replace: true });
      // history.push(
      //   "/products",
      //   // search:
      //   //   "customer_key=" +
      //   //   params.customer_key 
         
      // );
    }
  };
  

  return (
    <ThemeProvider theme={theme}>
     <Container style={{backgroundColor:"#DB7210",padding:"0px"}} component="main" maxWidth="xs">
        <CssBaseline />
        <br /> <br />
        <Typography color="#ffffff" align='left' fontWeight='500' fontSize="20px"  variant="p">
         &emsp;  Sign In
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
         
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}