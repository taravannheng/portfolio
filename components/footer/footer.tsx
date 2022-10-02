import Image from 'next/image';
import Link from 'next/link';

import classes from './footer.module.scss';

const getYear = () => {
  return new Date().getFullYear().toString();
};

const FooterSection = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__social}>
        <div className={classes.social__icon}>
          <Link
            href="https://www.linkedin.com/in/taravann-heng"
          >
            <a target="_blank">
              <Image
                src="/images/social/linkedin.svg"
                width={36}
                height={36}
                alt="LinkedIn"
              />
            </a>
          </Link>
        </div>
        <div className={classes.social__icon}>
          <Link href="https://github.com/taravannheng">
            <a target="_blank">
              <Image
                src="/images/social/github.svg"
                width={36}
                height={36}
                alt="GitHub"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className={classes.footer__copyright}>
        <p className={classes.copyright__credit}>
          Designed and Built by Taravann Heng
        </p>
        <p className={classes.copyright__text}>
          All Rights Reserved · {getYear()}
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
