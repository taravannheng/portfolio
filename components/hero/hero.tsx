import Image from 'next/image'

import classes from './hero.module.scss'
import Profile from '../profile/profile'

const HeroSection = () => {
  return (
    <div className={classes.hero}>
      <Profile src="/images/profile/profile.jpg" />
      <h1 className={classes.hero__title}>Taravann</h1>
      <h2 className={classes.hero__subtitle}><span className={classes.subtitle__optional}>A</span> Frontend Developer<span className={classes.subtitle__optional}> · Previously A UX Designer</span></h2>
      <p className={classes.hero__bio}>Hello there! I&apos;m Taravann Heng. I have some experiences doing both design and development work for mobile apps and websites. Regarding education, I have a Bachelor&apos;s degree in International Banking and Finance. Also I have a Master&apos;s degree in Information Technology. Currently, I want to work and focus on frontend web development.</p>
      <div className={classes.hero__illustration}>
        <Image src='/images/illustrations/illustration-hero.png' width={800} height={800} alt="illustration" />
      </div>
    </div>
  )
}

export default HeroSection