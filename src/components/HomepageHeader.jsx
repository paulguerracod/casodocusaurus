import React from 'react';
import clsx from 'clsx';
import styles from './HomepageHeader.module.css';

export default function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.title}>
          <img 
            src="/img/logo-facturalo.svg" 
            alt="Facturalo" 
            className={styles.logo}
          />
        </h1>
        <p className={styles.subtitle}>Documentación Técnica</p>
      </div>
    </header>
  );
}