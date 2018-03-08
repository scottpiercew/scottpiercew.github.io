import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import { FaUser } from 'react-icons/lib/fa';

const About = () => (
  <div className="container about-container">
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header>About  <FaUser /></Header>
    <Container text>
      <h1>Hello</h1>
      <p>
      I'm a DEVELOPER, DESIGNER, HUSBAND and MARINE who makes an impact by thinking long-term. Advances strategic goals through focused efforts and bringing teams together. Motivated to succeed, can be counted on to drive the core mission forward. I am exploring opportunities as a front-end developer.
      </p>
    </Container>
    <Footer />
  </div>
);

export default About;
