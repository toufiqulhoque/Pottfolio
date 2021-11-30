import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';

import Projects from '../Projects/Projects';
import ScrollToTop from '../ScrollToTop/ScrollToTop';



const Home = () => {
    return (
        <div>
            <ScrollToTop />
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <ContactUs></ContactUs>



        </div>
    );
};

export default Home;