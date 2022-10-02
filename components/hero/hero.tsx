import Image from 'next/image'

import classes from './hero.module.scss'
import Profile from '../profile/profile'

const HeroSection = () => {
  return (
    <div className={classes.hero}>
      <Profile src="/images/profile/profile.jpg" />
      <h1 className={classes.hero__title}>Taravann</h1>
      <h2 className={classes.hero__subtitle}><span className={classes.subtitle__optional}>A</span> Frontend Developer<span className={classes.subtitle__optional}> · Previously A UX Designer</span></h2>
      <p className={classes.hero__bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>
    </div>
  )
}

export default HeroSection