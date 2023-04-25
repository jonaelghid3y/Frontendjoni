import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet, useLocation } from 'react-router-dom'; // Updated import
import LanguageProvider from '../Components/LanguageProvider';

const Root = () => {
 
  

  return (
    <LanguageProvider>
      <Header />
      <Outlet />
      <Footer />
    </LanguageProvider>
  );
};

export default Root;
