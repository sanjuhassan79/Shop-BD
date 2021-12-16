import styled from 'styled-components';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { useState } from 'react';
import { sliderItems } from '../../Data';
import { mobile } from '../../Responsive';
const Container=styled.div`
width:100%;
height:100vh; 
display:flex;

position:relative;
overflow:hidden;
${mobile({display:"none"})}
`
const Arrow=styled.div`
width:50px;
height:50px; 
background-color:#fff7f7;
border-radius: 50%;
display:flex;
align-items:center;
justify-content:center;
position: absolute;
top: 0;
bottom: 0;
left:${props=>props.direction ==="left" && "10px"};
right:${props=>props.direction ==="right" && "10px"};

margin: auto;
cursor:pointer;
opacity:0.5;
z-index:2;
`;


const Wrapper=styled.div`
height:100%;
display:flex;
transition:all 1.5s ease;
transform:translateX(${props=>props.slideIndex*-100}vw);
`;

const Slide=styled.div`

width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:#${props=>props.bg}
`;
const ImgContainner=styled.div`
height:100%;
flex:1;
`;
const Image=styled.img`
width:100%;
height:100%;
object-fit: contain;
`
const InFoContainer=styled.div`
flex:1;
padding:50px;
`;

const Title=styled.h1`
font-size:70px;

`;
const Desc=styled.p`
margin:50px 0;
font-size:20px;
font-weight:500;
letter-spacing:3px
`;
const Button=styled.button`
font-size:20px;
padding:10px;
background-color:trasparent;
cursor:pointer;
`;

const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0)
    const handleClick=(direction)=>{
if(direction==="left"){
    setSlideIndex(slideIndex>0?slideIndex-1:2)
}else{
    setSlideIndex(slideIndex<2?slideIndex+1:0)  
}

    }
    return (
        <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowForwardIosOutlinedIcon></ArrowForwardIosOutlinedIcon>

        </Arrow>
        
        <Wrapper slideIndex={slideIndex}>

{
sliderItems.map(item=>(
<Slide bg={item.bg} key={item.id}>

<ImgContainner>
    <Image src={item.img}></Image>
    </ImgContainner>
    <InFoContainer>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <Button>SHOP NOW</Button>
        
        
        </InFoContainer>  
    </Slide>



))


}


        
        
          


        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowBackIosOutlinedIcon></ArrowBackIosOutlinedIcon>

        </Arrow>
    </Container>
    );
};

export default Slider;