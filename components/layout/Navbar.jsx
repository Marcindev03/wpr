import Link from 'next/link';

import styles from '@styles/Navbar.module.scss';

const Navbar = ({ menu }) => {
  return (
    <nav className={styles.mainNav}>
      <ul>
        {menu.map(({ href, content, style }, i) => (
          <li key={i}>
            <Link href={href}>
              <a style={{ ...style }}>{content}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  menu: [
    {
      href: '/',
      content: 'WPR',
    },
    {
      href: '/live/konkursy',
      content: 'Konkursy',
    },
    {
      href: '/wsparcie',
      content: 'Wsparcie Kanału',
    },
    {
      href: 'https://www.youtube.com/channel/UC96YvVeftsCw6gSLWimaeww',
      content: 'Kanał',
      style: { fontWeight: 'bold' },
    },
    {
      href: '/kontakt',
      content: 'Kontakt',
    },
  ],
};

export default Navbar;
