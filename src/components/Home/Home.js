import React from 'react';
import About from '../Header/About/About';
import Banner from '../Header/Banner/Banner';
import Chosse from '../Header/chosse/Chosse';
import Contact from '../Header/Contact/Contact';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Products></Products>
            <Chosse></Chosse>
            <Contact></Contact>
        </div>
    );
};

export default Home;