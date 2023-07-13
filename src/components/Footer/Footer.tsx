import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className='copy-text'>&copy; 2023 Detelina Palova. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
