import React from 'react';
import Layout from '@theme/Layout';

import Header from '../components/portfolio/Header';
import Hero from '../components/portfolio/Hero';
import MySkills from '../components/portfolio/MySkills';
import Projects from '../components/portfolio/Projects';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';

export default function PortfolioHome() {
  return (
    <Layout 
      title="Behrouz Rajaei | Portfolio"
      noFooter
    >
      <Header />
      <Hero />
      <MySkills />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
}
