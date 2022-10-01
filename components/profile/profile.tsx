import Image from 'next/image';

import classes from './profile.module.scss';

const Profile = () => {
  return (
    <div className={classes.profile}>
      <Image
        src="/images/profile/profile.jpg"
        width="300"
        height="300"
        alt="profile picture"
      />
    </div>
  );
};

export default Profile;
