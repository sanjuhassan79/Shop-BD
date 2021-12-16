// import styled from 'styled-components';
import { Grid } from '@mui/material';
import { categories } from '../../Data';
// import { mobile } from '../../Responsive';
// import categories from '../../Data';
import CategoryItem from './CategoryItem';


// const Container=styled.div`
// display:flex;
// padding:20px;
// justify-content:space-between;
// ${mobile({padding:"0px",flexDirection:"column"})}
// `;
const Categories = () => {
    return (

<Grid container sx={{ my: 6 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
{
                categories.map(item=><CategoryItem
                key={item.id}
                item={item}
                
                ></CategoryItem>)
            }
</Grid>




        // <Container>
           
        // </Container>
    );
};

export default Categories;