import Meta from '../components/layout/Meta';

import Showcase from '../components/layout/Showcase';

const Contact = () => {
  return (
    <>
      <Meta
        title={'WPR - Skontaktuj się'}
        keywords={'WPR, kontakt, WPR kontakt, email'}
        description={
          'Zapraszamy do kontaktu na email: wolnoscporemoncie@gmail.com'
        }
      />
      <Showcase
        title={'Skontaktuj się z '}
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
          Nasz głowny email kontaktowy:{' '}
          <span
            style={{
              fontWeight: 'bold',
              letterSpacing: '1px',
            }}
          >
            wolnoscporemoncie@gmail.com
          </span>{' '}
        </p>
        <p
          style={{
            textAlign: 'center',
          }}
        >
          Dziąkujemy każdy wysłany kontakt 😉
        </p>
      </section>
    </>
  );
};

export default Contact;
