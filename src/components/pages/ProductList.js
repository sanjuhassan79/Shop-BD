import React, { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { mobile } from '../../Responsive';
// import Announcement from '../compomemt/Announcement';
import Footer from '../compomemt/Footer';

import Navigation from '../compomemt/Navigation';
import Newsletter from '../compomemt/Newsletter';
import Products from '../compomemt/Products';


const Container=styled.div`

`;
const Title=styled.h1`
margin: 20px;
`;
const FilterContainer=styled.div`
display: flex;
justify-content: space-between;
`;
const Filter=styled.div`
margin: 20px;
${mobile({margin: "0px 20px",display:'flex',flexDirection:"column"})}
`;
const FilterText=styled.span`
font-size: 20px;
font-weight: 600;
margin-right:20px;
${mobile({marginRight:"20px"})}
`;
const Select=styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin:"10px 0px"})}
`;
const Option=styled.option`

`;
const ProductList = () => {
  const navigate = useLocation();;
  
const cat=navigate.pathname.split("/")[2];
const [filter,setFilter]=useState({})
const [sort,setSort]=useState("Newest")
const handleFilters=(e)=>{
const value=e.target.value;
setFilter({
  ...filter,
  [e.target.name]:value
})
}

    return (
        <Container>
            <Navigation></Navigation>
            {/* <Announcement></Announcement> */}
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter> <FilterText>Filter Product:</FilterText>
                <Select name="color" onChange={handleFilters}>
            <Option disabled>
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
                
                </Filter>
                <Filter><FilterText>Sort Product:</FilterText>
                <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filter={filter} sort={sort}></Products>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </Container>
    );
};

export default ProductList;