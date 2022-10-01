import Image from 'next/image'

import classes from './hero.module.scss'
import Profile from '../profile/profile'

const HeroSection = () => {
  return (
    <div className={classes.hero}>
      <Profile src="/images/profile/profile.jpg" />
      <h1 className={classes.hero__title}>Taravann</h1>
      <h2 className={classes.hero__subtitle}><span className={classes.subtitle__optional}>A</span> Web Developer<span className={classes.subtitle__optional}> · Previously A UX Designer</span></h2>
      <p className={classes.hero__bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>
      <div className={classes.hero__technology}>
        <p>Some technology I&apos;m familiar with:</p>
        <div className={classes.technology__container}>
          <ul>
            <li><Image src="/images/languages/aws.png" width="36" height="36" alt="amazon web services" /></li>
            <li><Image src="/images/languages/babel.png" width="36" height="36" alt="babel" /></li>
            <li><Image src="/images/languages/bootstrap.png" width="36" height="36" alt="bootstrap" /></li>
            <li><Image src="/images/languages/eslint.png" width="36" height="36" alt="eslint" /></li>
            <li><Image src="/images/languages/firebase.png" width="36" height="36" alt="firebase" /></li>
            <li><Image src="/images/languages/graphql.png" width="36" height="36" alt="graphql" /></li>
            <li><Image src="/images/languages/javascript.png" width="36" height="36" alt="javascript" /></li>
            <li><Image src="/images/languages/materialui.png" width="36" height="36" alt="material ui" /></li>
            <li><Image src="/images/languages/nextjs.png" width="36" height="36" alt="next js" /></li>
            <li><Image src="/images/languages/python.png" width="36" height="36" alt="python" /></li>
            <li><Image src="/images/languages/react.png" width="36" height="36" alt="react" /></li>
            <li><Image src="/images/languages/redux.png" width="36" height="36" alt="redux" /></li>
            <li><Image src="/images/languages/sass.png" width="36" height="36" alt="sass" /></li>
            <li><Image src="/images/languages/tailwind.png" width="36" height="36" alt="tailwind" /></li>
            <li><Image src="/images/languages/typescript.png" width="36" height="36" alt="typescript" /></li>
            <li><Image src="/images/languages/webpack.png" width="36" height="36" alt="webpack" /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeroSection