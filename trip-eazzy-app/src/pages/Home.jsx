import React from 'react';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import CardPlanner from '../components/CardPlanner';
import GetApp from '../components/GetApp';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Card />
      <CardPlanner />
      <GetApp />
      <Footer />
    </>
  );
}

export default Home;
