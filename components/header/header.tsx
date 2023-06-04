import Image from 'next/image';

import classes from './header.module.scss';

const HeaderSection = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
          <Image
            loading="lazy"
            src="/images/logos/self.svg"
            width={40}
            height={40}
            alt="logo"
          />
        </div>
    </header>
  );
};

export default HeaderSection;
