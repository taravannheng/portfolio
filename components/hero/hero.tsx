import Image from 'next/image'

import classes from './hero.module.scss'
import Profile from '../profile/profile'

const HeroSection = () => {
  return (
    <section className={classes.hero}>
      <Profile src="/images/profile/profile.jpg" />
      <h1 className={classes.hero__title}>Taravann</h1>
      <h2 className={classes.hero__subtitle}><span className={classes.subtitle__optional}>A</span> Frontend Developer<span className={classes.subtitle__optional}> · Previously A UX Designer</span></h2>
      <p className={classes.hero__bio}>Hello, there! I&apos;m Taravann Heng. A developer/designer based in Cambodia. I have some experiences doing both UX design and frontend development works for mobile apps and websites. Currently, I&apos;m focusing on frontend web development.</p>
      <div className={classes.hero__illustration}>
        <Image src='/images/illustrations/illustration-hero.png' width={800} height={800} alt="illustration" priority />
      </div>
    </section>
  )
}

export default HeroSection