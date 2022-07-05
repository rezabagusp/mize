import React from 'react';

import AppLayout from '../components/appLayout';
import SEO from '../components/seo';
import HomeScreen from '../screens/home';

const Home = () => (
  <>
    <SEO title="Home" />
    <AppLayout>
      <HomeScreen />
    </AppLayout>
  </>
);

export default Home;
