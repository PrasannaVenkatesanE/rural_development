import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CostTimeCalculator from '../components/CostTimeCalculator';
import HowItWorks from '../components/HowItWorks';
import GovernmentAlignment from '../components/GovernmentAlignment';
import DownloadDPR from '../components/DownloadDPR';

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <CostTimeCalculator />
            <HowItWorks />
            <GovernmentAlignment />
            <DownloadDPR />
        </>
    );
};

export default Home;
