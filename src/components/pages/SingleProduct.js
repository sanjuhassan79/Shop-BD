


import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import styled from "styled-components";
// import Announcement from "../compomemt/Announcement";
import Footer from "../compomemt/Footer";

import Newsletter from "../compomemt/Newsletter";
import { mobile } from '../../Responsive';
import Navigation from '../compomemt/Navigation';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { publicRequest } from '../../requestMethoods';
import { useDispatch } from 'react-redux'
import { addProduct } from '../../Redux/cartRedux';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding: "10px",flexDirection:"column"})}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height: "40vh"})}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding: "10px"})}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width: "100%"})}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width: "100%"})}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const SingleProduct = () => {

  const navigate = useLocation();;
  const dispatch = useDispatch()
  const id=navigate.pathname.split("/")[2];
  const [product,setproduct]=useState({})
  const [quantity,setQuantity]=useState(1)
  const [color,setColor]=useState("")
  const [size,setSize]=useState("")

  useEffect(() => {
   const getProduct=async ()=>{
     try{
const res=await publicRequest.get("/products/find/" + id)
setproduct(res.data)
     }catch{

     }
   }

   getProduct()
  }, [id]);
const handleQuantity=(type)=>{
  if(type ==="dec"){
    quantity>1 && setQuantity(quantity-1)
  }else{
    setQuantity(quantity+1)
  }
}

const handleCart=()=>{
  dispatch(
    addProduct({...product,quantity,color,size})
    // addProduct({product,quantity,price:product.price*quantity})
  )


}







  return (
    <Container>
      <Navigation />
      {/* <Announcement /> */}
      <Wrapper>
        <ImgContainer>
          <Image src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}
          </Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {/* {product?.color?.map(c=>(

              <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
              ))} */}
              <FilterColor color={product.color} 
              onClick={()=>setColor(`{product.color}`)}/>
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onClick={(e)=>setSize(e.target.value)}>
                 {/* {product?.size?.map(c=>(

              <FilterSizeOption  key={c} >{c}</FilterSizeOption>
              ))} */}
                <FilterSizeOption>{product.size}</FilterSizeOption>
               
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon onClick={()=>handleQuantity("dec")}/>
              <Amount>{quantity}</Amount>
              <AddIcon onClick={()=>handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={handleCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;