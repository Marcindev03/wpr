import Link from 'next/link';
import Navbar from '@components/layout/Navbar';

import style from '@styles/Header.module.scss';

const Header = ({ title }) => {
  return (
    <header className={style.mainHeader}>
      <Link href="/">
        <a>
          <h2 className={style.logo}>
            {title}
            <img src="/assets/doge.svg" alt="doge" className={style.logoImg} />
          </h2>
        </a>
      </Link>
      <Navbar />
    </header>
  );
};

Header.defaultProps = {
  title: 'WPR SHITPOST',
};

export default Header;
