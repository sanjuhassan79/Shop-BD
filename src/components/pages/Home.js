import React from 'react';
//  import Announcement from '../compomemt/Announcement';
 import Categories from '../compomemt/Categories';
 import Footer from '../compomemt/Footer';


import Navigation from '../compomemt/Navigation';
import Newsletter from '../compomemt/Newsletter';
 import Products from '../compomemt/Products';
 import Slider from '../compomemt/Slider';

const Home = () => {
    return (
        <div>
           {/* <Announcement/>  */}
            <Navigation></Navigation>
            <Slider></Slider>
            <Categories></Categories>
            <Products></Products>
           
            
            
            <Newsletter></Newsletter>
            <Footer></Footer> 
        </div>
    );
};

export default Home;