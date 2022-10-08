import Image from 'next/image';

import classes from './profile.module.scss';

const Profile = ({ src }) => {
  return (
    <div className={classes.profile}>
      <Image
        src={src}
        width={300}
        height={300}
        alt="profile picture"
        priority
      />
    </div>
  );
};

export default Profile;
