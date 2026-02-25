import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Juice Shop Documentation">
      <main style={{ padding: '4rem', textAlign: 'center' }}>
        <h1>OWASP Juice Shop Documentation</h1>
        <p>This documentation contains my completed challenges and explanations.</p>
        <Link
          to="/docs/intro"
          style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '0.8rem 2rem',
            backgroundColor: '#266AD9',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none'
          }}
        >
          Go to Documentation
        </Link>
      </main>
    </Layout>
  );
}
