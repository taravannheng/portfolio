import Image from 'next/image';

import classes from './skills.module.scss';

const SkillsSection = () => {
  return (
    <section className={classes.skills} id="skills">
      <h2 className={classes.skills__title}>Skills</h2>
      <div className={classes.content}>
        <div className={classes.content__illustration}>
          <Image layout='responsive' src='/images/illustrations/illustration-skill.png' width={800} height={800} alt="illustration of work" />
        </div>
        <div className={classes.content__technology}>
          <p>Some technologies I&apos;m familiar with:</p>
          <div className={classes.technology__container}>
            <ul>
              {/* <li><Image src="/images/languages/aws.svg" width={36} height={36} alt="amazon web services" /></li> */}
              {/* <li><Image src="/images/languages/babel.svg" width={36} height={36} alt="babel" /></li> */}
              {/* <li><Image src="/images/languages/bootstrap.svg" width={36} height={36} alt="bootstrap" /></li> */}
              {/* <li><Image src="/images/languages/eslint.svg" width={36} height={36} alt="eslint" /></li> */}
              <li><Image src="/images/languages/firebase.svg" width={36} height={36} alt="firebase" /></li>
              {/* <li><Image src="/images/languages/graphql.svg" width={36} height={36} alt="graphql" /></li> */}
              <li><Image src="/images/languages/javascript.svg" width={36} height={36} alt="javascript" /></li>
              {/* <li><Image src="/images/languages/materialui.svg" width={36} height={36} alt="material ui" /></li> */}
              <li><Image src="/images/languages/nextjs.svg" width={36} height={36} alt="next js" /></li>
              <li><Image src="/images/languages/python.svg" width={36} height={36} alt="python" /></li>
              <li><Image src="/images/languages/react.svg" width={36} height={36} alt="react" /></li>
              <li><Image src="/images/languages/redux.svg" width={36} height={36} alt="redux" /></li>
              <li><Image src="/images/languages/sass.svg" width={36} height={36} alt="sass" /></li>
              {/* <li><Image src="/images/languages/tailwind.svg" width={36} height={36} alt="tailwind" /></li> */}
              <li><Image src="/images/languages/typescript.svg" width={36} height={36} alt="typescript" /></li>
              {/* <li><Image src="/images/languages/webpack.svg" width={36} height={36} alt="webpack" /></li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
