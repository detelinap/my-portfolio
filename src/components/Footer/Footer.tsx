import React from 'react';
import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';

function Footer() {
  const {t} = useTranslation('common');
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className='copy-text'>&copy; 
        {t("footer.text")}
       </p>
      </div>
    </footer>
  );
}

export default Footer;
