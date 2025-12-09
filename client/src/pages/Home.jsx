import React from 'react';
import Hero from '../components/Hero.jsx';
import LatestListing from '../components/LatestListing.jsx';
import Plans from '../components/Plans.jsx';
import CTA from '../components/CTA.jsx';
import Footer from '../components/Footer.jsx'


const Home = () => {
    return (
        <div>
           
            <Hero/>
            <LatestListing/>
            <Plans/>
            <CTA/>
            <Footer/>
        </div>
    );
};

export default Home;