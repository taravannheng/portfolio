import Link from 'next/link';
import Image from 'next/image';

import classes from './header.module.scss';

const Header = ({ hideElement }) => {
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <div className={classes.header__logo}>
          <Link href="/">
            <Image
              src="/images/logos/self.svg"
              width={96}
              height={96}
              alt="site logo"
              priority
            />
          </Link>
        </div>
        <nav className={classes.header__nav}>
          {hideElement !== 'home' && (
            <a className={`${classes.nav} ${classes.nav__link}`}>
              <Link href="/">Home</Link>
            </a>
          )}
          {hideElement !== 'skills' && (
            <a className={`${classes.nav} ${classes.nav__link}`}>
              <Link href="#skills">Skills</Link>
            </a>
          )}
          {hideElement !== 'works' && (
            <a className={`${classes.nav} ${classes.nav__link}`}>
              <Link href="#works">Works</Link>
            </a>
          )}
          {hideElement !== 'projects' && (
            <a className={`${classes.nav} ${classes.nav__link}`}>
              <Link href="#projects">Projects</Link>
            </a>
          )}
          {hideElement !== 'contact' && (
            <a className={`${classes.nav} ${classes.nav__link}`}>
              <Link href="#contact">Contact</Link>
            </a>
          )}
          {hideElement !== 'credits' && (
            <a className={`${classes.nav} ${classes.nav__link}`}>
              <Link href="/credits">Credits</Link>
            </a>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
