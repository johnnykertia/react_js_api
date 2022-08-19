import React from 'react';
import HeroSection from '../pages/HeroSection';
import Pricing from '../pages/Pricing';
import { homeObjOne, homeObjThree } from './Data';

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree}/>
    </>
  );
}

export default Services;
