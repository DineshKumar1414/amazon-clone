import { React, useEffect, useState } from "react";
import { Grid, Card, Typography, Button } from "@mui/material";
import { Link ,useParams} from "react-router-dom";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Header from "../navbar";
export default function ProductDetails(props) {

    useEffect(() => {
        fetchData();
    }, [])

   

    const [user, setUser] = useState([]);

    const fetchData = () => {
        return fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }


    return (

        <div>
               <Header />
        
           {user && user.length > 0 && user.map((userObj, index) => ( 
          <Grid
          marginTop={2}
          container
          columnSpacing={3}
          rowSpacing={3}
          direction="row"
          justifyContent="space-around"
          alignItems="stretch"
       >
           <Grid item xs={12} md={6} lg={6} xl={6}>
               
                    <img style={{ maxWidth: "100%", maxHeight: "320px" }} src={userObj.image}></img>
                  </Grid>
                  <Grid item xs={12} md={4} lg={4} xl={4}>   <Typography variant='p' >{userObj.title}</Typography><br /><br />
                  
                  <Typography variant='p' >{userObj.description}</Typography><br /><br />
                  <Typography variant="p" fontWeight="400"><span>&#8377;</span>&nbsp;{userObj.price}</Typography><br /><br />
                  <div> <Button style={{ backgroundColor: "#4F7942", color: "#ffffff" }} variant="contained">+</Button>&emsp;<Button style={{ backgroundColor: "#4F7942", color: "#ffffff" }} variant="contained">-</Button> <Link style={{textDecoration:"none"}} to="/checkout"> &emsp; <Button style={{ backgroundColor: "#4F7942", color: "#ffffff" }} variant="contained">Add to cart</Button> </Link> </div></Grid> 
                  </Grid> ))}




               
          
        </div>
    );
}

