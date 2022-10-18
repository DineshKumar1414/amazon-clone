import { React, useEffect, useState ,useCallback} from "react";
import { Grid, Card, Typography, Button } from "@mui/material";
import { Link ,useParams} from "react-router-dom";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Header from "../navbar";
import productsApi from '../../components/api/products';
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useCartDispatch, useCartState } from '../../utils.js/cart-context';
export default function ProductDetails(props) {
    const location = useLocation();
   

    let params = queryString.parse(location.search);
console.log(location.state.id)
    const [user, setUser] = useState();

    const [error, setError] = useState(null);
    const loadProducts = useCallback(async () => {
        
        setError(null);
        try {
            const json = await productsApi.getProduct(location.state.id);
            console.log(json)
            setUser(json);
        } catch (_error) {
            setError(_error);
        }

    }, [ ]);

    useEffect(() => {
        loadProducts();
    }, [loadProducts]);


    return (

        <div>
               <Header />
        
           {user && 
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
               
                    <img style={{ maxWidth: "100%", maxHeight: "320px" }} src={user.image}></img>
                  </Grid>
                  <Grid item xs={12} md={4} lg={4} xl={4}>   <Typography variant='p' >{user.title}</Typography><br /><br />
                  
                  <Typography variant='p' >{user.description}</Typography><br /><br />
                  <Typography variant="p" fontWeight="400"><span>&#8377;</span>&nbsp;{user.price}</Typography><br /><br />
                  <div> <Button style={{ backgroundColor: "#4F7942", color: "#ffffff" }} variant="contained">+</Button>&emsp;
                  <Button style={{ backgroundColor: "#4F7942", color: "#ffffff" }} variant="contained">-</Button>
                   <Link style={{textDecoration:"none"}} 
                    to={`/checkout/`} state={{ id: user.id }}
                    > &emsp; 
                  <Button style={{ backgroundColor: "#4F7942", color: "#ffffff" }} variant="contained">Add to cart</Button> </Link> </div></Grid> 
                  </Grid> }




               
          
        </div>
    );
}

