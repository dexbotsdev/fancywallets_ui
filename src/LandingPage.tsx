import { Container } from '@mantine/core';
import React from 'react';
import { HeaderMiddle } from './HeaderTop';
import './index.css'; 
import { Hero } from './Hero';
import { MidBanner } from './MidBanner';
import { MidBanner2 } from './MidBanner2';
import { FeaturesAsymmetrical } from './Feature';
import { FooterSimple } from './Footer';
  
function LandingPage() {
  return (
    <Container>
        <HeaderMiddle /> 
         <Hero />
         <FeaturesAsymmetrical/>
         <MidBanner />
         <MidBanner2 />
         <FooterSimple />
    </Container>
  );
}

export default LandingPage;
