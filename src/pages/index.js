import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Bienvenido a Facturalo</h1>
          <p className={styles.subtitle}>Sistema Integral de Facturación Electrónica</p>
          <div className={styles.ctnButtons}>
            <a href="/docs/intro" className={styles.primaryButton}>
              Comenzar
            </a>
            <a href="/docs/funcionalidades" className={styles.secondaryButton}>
              Ver Funcionalidades
            </a>
          </div>
        </div>
      </div>
      
      <section className={styles.features}>
        <div className={styles.featureCard}>
          <h3>⚡ Facturación Rápida</h3>
          <p>Emite comprobantes electrónicos en segundos</p>
        </div>
        <div className={styles.featureCard}>
          <h3>📈 Reportes Avanzados</h3>
          <p>Genera análisis financieros detallados</p>
        </div>
        <div className={styles.featureCard}>
          <h3>🔒 Seguridad Garantizada</h3>
          <p>Cifrado de última generación</p>
        </div>
      </section>
    </Layout>
  );
}