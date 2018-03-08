import React from 'react';
import styles from './Footer.module.scss';
import config from '../../../config/SiteConfig';

const Footer = () => (
  <footer className={styles.footer}>
    {config.copyright} <a href="https://scottpierce-wrobel.com">Pierce-Wrobel LLC</a> {' by '}{' '}
    <a href="https://scottpierce-wrobel.com">Scott</a>.
  </footer>
);

export default Footer;
