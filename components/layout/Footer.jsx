import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <p className="text-center">
        2021 &copy;{' '}
        <Link href="https://www.youtube.com/channel/UC96YvVeftsCw6gSLWimaeww">
          <a
            style={{
              color: 'red',
              fontWeight: 'bold',
              letterSpacing: '1px',
            }}
          >
            WPR SHITPOST
          </a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
