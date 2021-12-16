import { Button, Grid } from '@mui/material';
import React from 'react';
import './ProductItem.css'
const ProductItem = ({item}) => {
    return (
        

<Grid item xs={6} sm={12} md={4}>
<div className="card">
               <div className="circle"></div> 
               <div className="content">
                   <h2>fdgdfghdfghfghfg</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quo culpa esse magnam </p>
                   <Button>BUY NOW</Button>
               </div>
               <img src={item.img} alt="" />
            </div>
    </Grid>



            
        
    );
};

export default ProductItem;