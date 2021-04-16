import Link from 'next/link';

import Meta from '@components/layout/Meta';
import Showcase from '@components/layout/Showcase';

const Support = () => {
  return (
    <>
      <Meta
        title={'WPR - jak możesz nas wesprzeć'}
        keywords={'WPR, wsparcie'}
        description={'Jak można wesprzeć WPR'}
      />
      <Showcase
        title={'Jak możesz wesprzeć '}
        linkContent={'WPR SHITPOST'}
        linkHref={'https://tipply.pl/u/wpr​'}
      />
      <section>
        <p
          style={{
            textAlign: 'center',
            padding: '0 0 2rem 0',
            fontSize: '1.5rem',
          }}
        >
          Wsparcia można udzielić nam podczas transmisji na żywo{' '}
          <Link href="https://tipply.pl/u/wpr​">
            <a
              style={{
                fontWeight: 'bold',
              }}
            >
              Tutaj
            </a>
          </Link>
        </p>
        <p
          style={{
            textAlign: 'center',
          }}
        >
          Dziąkujemy za każdy okaz wsparcia
        </p>
      </section>
    </>
  );
};

export default Support;
