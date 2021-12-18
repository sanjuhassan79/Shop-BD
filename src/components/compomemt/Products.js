// import styled from 'styled-components';
//  import { popularProducts } from '../../Data';
// import Product from './Product';
import { Grid } from '@mui/material';
import ProductItem from './ProductItem/ProductItem';
import { useEffect, useState } from 'react';
import axios from 'axios';


// const Container=styled.div`
// padding:20px;
// display:flex;
// `;
const Products = ({cat,filter,sort}) => {
    const [products,setProducts]=useState([])
    const [filterProducts,setFilterProducts]=useState([])
    useEffect(() => {
      const getProducts=async()=>{
        try{
        const res=await axios.get(
            cat
            ? `https://desolate-retreat-85665.herokuapp.com/api/products?category=${cat}`
            : `https://desolate-retreat-85665.herokuapp.com/api/products`
           
            
            )
            setProducts(res.data)
        }catch{

        }


      }
      getProducts()
    }, [cat])


useEffect(() => {
   cat && setFilterProducts(products.filter((item)=>Object.entries(filter).every(([key,value])=>item[key].includes(value))))
}, [cat,filter,products]);


useEffect(() => {
if(sort==="newest") {
    setFilterProducts(prev=>
        [...prev].sort((a,b)=>a.createdAt-b.createdAt)
        )
}else if(sort==="asc") {
    setFilterProducts(prev=>
        [...prev].sort((a,b)=>a.price-b.price)
        )
}else{
    setFilterProducts(prev=>
        [...prev].sort((a,b)=>b.price-a.price)
        )
}
}, [sort]);


    // console.log(products);
    return (
        // <Container>
        //     
        // </Container>

        <Grid container sx={{ mx: 2 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
   {
        cat ?       filterProducts.map(item=><ProductItem
                key={item._id}
                item={item}
                
                ></ProductItem>)
                
                :

                products.map(item=><ProductItem
                    key={item._id}
                    item={item}
                    
                    ></ProductItem>)
     }
</Grid>
        // <ProductItem></ProductItem>
    );
};

export default Products;