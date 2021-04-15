import Link from 'next/link';

const Showcase = ({ title, linkContent, linkHref }) => {
  return (
    <section
      style={{
        margin: '5rem',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '3rem',
          letterSpacing: '1px',
        }}
      >
        {title}{' '}
        <Link href={linkHref}>
          <a
            style={{
              color: 'red',
            }}
          >
            {linkContent}
          </a>
        </Link>
      </h1>
    </section>
  );
};

Showcase.defaultProps = {
  linkHref: 'https://www.youtube.com/channel/UC96YvVeftsCw6gSLWimaeww',
};

export default Showcase;
