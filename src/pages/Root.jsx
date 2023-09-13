import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet, useLocation } from 'react-router-dom'; 
import LanguageProvider from '../Components/LanguageProvider';

const Root = () => {
  const { pathname } = useLocation();

  const shouldRenderHeaderFooter = !['/projectinfo1', '/projectinfo2', '/projectinfo4','/projectinfo5'].includes(pathname);
  console.log('shouldRenderHeaderFooter:', shouldRenderHeaderFooter);
  console.log('pathname:', pathname);

  

  return (
    <LanguageProvider>
      {shouldRenderHeaderFooter && <Header />}
      <Outlet />
      {shouldRenderHeaderFooter && <Footer />}
    </LanguageProvider>
  );
};

export default Root;