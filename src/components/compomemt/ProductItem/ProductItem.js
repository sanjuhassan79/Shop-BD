import { Button, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css'
const ProductItem = ({item}) => {
    return (
        

<Grid item xs={6} sm={12} md={4}>

   <Link to={`/product/${item._id}`}>
   <div className="card">
               <div className="circle"></div> 
               <div className="content">
                   <h2>{item.title?.slice(2, 80)}</h2>
                   <p>{item.description?.slice(2, 100)}</p>
                   <p>{item.price}</p>
                   <Button>BUY NOW</Button>
               </div>
               <img src={item.image} alt="" />
            </div>
       </Link> 

    </Grid>



            
        
    );
};

export default ProductItem;