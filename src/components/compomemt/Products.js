// import styled from 'styled-components';
 import { popularProducts } from '../../Data';
// import Product from './Product';
import { Grid } from '@mui/material';
import ProductItem from './ProductItem/ProductItem';


// const Container=styled.div`
// padding:20px;
// display:flex;
// `;
const Products = () => {
    return (
        // <Container>
        //     
        // </Container>

        <Grid container sx={{ mx: 2 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
   {
               popularProducts.map(item=><ProductItem
                key={item.id}
                item={item}
                
                ></ProductItem>)
            }
</Grid>
        // <ProductItem></ProductItem>
    );
};

export default Products;