import Image from "next/image";

import classes from "./skills.module.scss";

const SkillsSection = () => {
  return (
    <section className={classes.skills} id="skills">
      <h2 className={classes.skills__title}>Skills</h2>
      <div className={classes.content}>
        <div className={classes.content__illustration}>
          <Image
            loading="eager"
            layout="responsive"
            src="/images/illustrations/illustration-skill.png"
            width={800}
            height={800}
            alt="illustration of work"
          />
        </div>
        <div className={classes.content__technology}>
          <p>Some technologies I&apos;m familiar with:</p>
          <div className={classes.technology__container}>
            <ul>
              <li>
                <div className={classes.techLogo}>
                  <Image
                    loading="eager"
                    src="/images/languages/aws.svg"
                    width={36}
                    height={36}
                    alt="amazon web services"
                  />
                </div>
                <span>AWS</span>
              </li>
              {/* <li><Image loading='eager' src="/images/languages/babel.svg" width={36} height={36} alt="babel" /></li> */}
              {/* <li><Image loading='eager' src="/images/languages/bootstrap.svg" width={36} height={36} alt="bootstrap" /></li> */}
              {/* <li><Image loading='eager' src="/images/languages/eslint.svg" width={36} height={36} alt="eslint" /></li> */}
              <li>
                <Image
                  loading="eager"
                  src="/images/languages/firebase.svg"
                  width={36}
                  height={36}
                  alt="firebase"
                />
                <span>Firebase</span>
              </li>
              {/* <li><Image loading='eager' src="/images/languages/graphql.svg" width={36} height={36} alt="graphql" /></li> */}
              <li>
                <Image
                  loading="eager"
                  src="/images/languages/javascript.svg"
                  width={36}
                  height={36}
                  alt="javascript"
                />
                <span>JavaScript</span>
              </li>
              {/* <li><Image loading='eager' src="/images/languages/materialui.svg" width={36} height={36} alt="material ui" /></li> */}
              <li>
                <Image
                  loading="eager"
                  src="/images/languages/nextjs.svg"
                  width={36}
                  height={36}
                  alt="next js"
                />
                <span>NextJS</span>
              </li>
              <li>
                <Image
                  loading="eager"
                  src="/images/languages/python.svg"
                  width={36}
                  height={36}
                  alt="python"
                />
                <span>Python</span>
              </li>
              <li>
                <Image
                  loading="eager"
                  src="/images/languages/react.svg"
                  width={36}
                  height={36}
                  alt="react"
                />
                <span>React</span>
              </li>
              <li>
                <Image
                  loading="eager"
                  src="/images/languages/redux.svg"
                  width={36}
                  height={36}
                  alt="redux"
                />
                <span>Redux</span>
              </li>
              <li>
                <Image
                  loading="eager"
                  src="/images/languages/sass.svg"
                  width={36}
                  height={36}
                  alt="sass"
                />
                <span>Sass</span>
              </li>
              <li>
                <Image
                  loading="eager"
                  src="/images/languages/tailwind.svg"
                  width={36}
                  height={36}
                  alt="tailwind"
                />
                <span>Tailwind CSS</span>
              </li>
              <li>
                <Image
                  loading="eager"
                  src="/images/languages/typescript.svg"
                  width={36}
                  height={36}
                  alt="typescript"
                />
                <span>TypeScript</span>
              </li>
              {/* <li><Image loading='eager' src="/images/languages/webpack.svg" width={36} height={36} alt="webpack" /></li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
