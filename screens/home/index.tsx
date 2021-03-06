import React from 'react';
import { Element } from 'react-scroll';

import VisionSection from './visionSection';
import AboutSection from './abousSection';
import ConceptSection from './conceptSection';
import RoadmapSection from './roadmapSection';
import MeetTeamSection from './meetTeamSection';
import HeroSection from './heroSection';
import MidHeroSection from './midHeroSection';

const HomeScreen = () => (
  <>
    <HeroSection />
    <Element name="#about">
      <AboutSection />
    </Element>
    <MidHeroSection />
    <VisionSection />
    <Element name="#concept">
      <ConceptSection />
    </Element>
    <Element name="#roadmap">
      <RoadmapSection />
    </Element>
    <MeetTeamSection />
  </>
);

export default HomeScreen;
