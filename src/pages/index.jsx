import React from 'react';
import Layout from '@theme/Layout';
import HomepageHeader from '../components/HomepageHeader';
import HomepageFeatures from '../components/HomepageFeatures';

export default function Home() {
  return (
    <Layout
      title="Facturalo - Documentación Oficial"
      description="Sistema de Facturación Electrónica">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}