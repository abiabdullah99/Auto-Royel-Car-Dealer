import React from 'react';
import About from '../Header/About/About';
import Banner from '../Header/Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Products></Products>
        </div>
    );
};

export default Home;