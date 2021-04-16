import { SafesWrapper } from '@context/safesState';

import Layout from '@components/layout/Layout';

import '@styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <SafesWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SafesWrapper>
  );
}

export default MyApp;
