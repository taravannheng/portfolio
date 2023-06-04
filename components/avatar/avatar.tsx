import Image from 'next/image';

import classes from './avatar.module.scss';

const Avatar = ({ src }) => {
  return (
    <div className={classes.avatar}>
      <Image
        src={src}
        width={300}
        height={300}
        alt="avatar"
        priority
      />
    </div>
  );
};

export default Avatar;
