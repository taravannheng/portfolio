import Image from 'next/image';
import Link from 'next/link';

import classes from './footer.module.scss';

const getYear = () => {
  return new Date().getFullYear().toString();
};

const FooterSection = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__text}>
        <p className={classes.text__info}>
          Designed and Built by Taravann Heng
        </p>
        <p className={classes.text__copyright}>
          All Rights Reserved · {getYear()}
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
