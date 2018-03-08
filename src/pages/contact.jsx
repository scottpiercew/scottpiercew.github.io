import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import { TiDevicePhone, TiMail, TiLocationOutline } from 'react-icons/lib/ti';
import { FaPhone } from 'react-icons/lib/fa';

const Contact = () => (
  <div className="container contact-container">
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>Contact <TiDevicePhone /></Header>
    <Container text>
      <h1>Contact me!</h1>
      <p><FaPhone /> Phone: 202-660-1174</p>
      <p><TiMail /> Email: <a href="mailto:scottpiercew@gmail.com?Subject=Web%20Development" target="_blank">scottpiercew@gmail.com</a></p>
      <p><TiLocationOutline />Washington, D.C.</p>
    </Container>
    <Footer />
  </div>
);

export default Contact;
