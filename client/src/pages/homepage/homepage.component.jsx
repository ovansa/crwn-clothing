import React from 'react';
import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer data-testid='home-page-container'>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
