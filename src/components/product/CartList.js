import { React ,useEffect,useState} from "react";
import {  Grid ,Card, Typography, Button} from "@mui/material";
import { Link } from "react-router-dom";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
function CartList(props) {

    const [user, setUser] = useState([]);

    const fetchData = () => {
        return fetch("https://fakestoreapi.com/products")
              .then((response) => response.json())
              .then((data) => setUser(data));
      }
    
      useEffect(() => {
        fetchData();
      },[])
    return (

        <div>       
             <Grid
          
         container
         columnSpacing={3}
         rowSpacing={3}
         direction="row"
         justifyContent="space-around"
         alignItems="stretch"
      >  {user && user.length > 0 && user.map((userObj, index) => (  <Grid item xs={12} sm={10} md={4} lg={3} xl={3}> 
            <Card key={userObj.id}
                style={{
                  
                    padding: "10px",
                  
                    backgroundColor: "#ffffff",
                  
                    cursor: "pointer",
                    boxShadow: "0px 0px 16px #00000017"
                }}
              

            >  
            <img style={{maxWidth:"100%",maxHeight:"320px"}} src={userObj.image}></img> 
            <Typography variant='p'>{userObj.title}</Typography>
            <br />
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
           <div><Typography variant="p" fontWeight="400"><span>&#8377;</span>&nbsp;{userObj.price}</Typography></div> 
        <Link style={{textDecoration:'none'}} to={`/products/${userObj.id}`}>  <Button  style={{backgroundColor:"#4F7942",color:"#ffffff"}}  variant="contained">Add to cart</Button> </Link> </div>
    
          
       
    
            </Card>   </Grid>))}
      </Grid>
        </div>
    );
}
export default CartList;
