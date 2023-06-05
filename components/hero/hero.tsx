import Image from "next/image";

import classes from "./hero.module.scss";
import Avatar from "../avatar/avatar";
import { StackSC } from "./hero.style";

const HeroSection = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.hero__body}>
        <Avatar src="/images/profile/profile.jpg" />
        <h1 className={classes.hero__title}>Taravann Heng</h1>
        <h2 className={classes.hero__subtitle}>Frontend Developer</h2>
        <p className={classes.hero__bio}>
          Hello, there! I&apos;m Taravann Heng, a developer. I have some
          experiences doing frontend development works for mobile apps and
          websites. Currently, I&apos;m focusing on frontend web development.
        </p>
        <div className={classes.hero__technology}>
          <p className={classes.technology__text}>
            Some technologies I&apos;m familiar with:
          </p>
          <StackSC direction="row">
            <Image
              loading="lazy"
              src="/images/languages/aws.svg"
              width={24}
              height={24}
              alt="aws"
            />
            <Image
              loading="lazy"
              src="/images/languages/javascript.svg"
              width={24}
              height={24}
              alt="javascript"
            />
            <Image
              loading="lazy"
              src="/images/languages/typescript.svg"
              width={24}
              height={24}
              alt="typescript"
            />
            <Image
              loading="lazy"
              src="/images/languages/python.svg"
              width={24}
              height={24}
              alt="python"
            />
            <Image
              loading="lazy"
              src="/images/languages/react.svg"
              width={24}
              height={24}
              alt="react"
            />
            <Image
              loading="lazy"
              src="/images/languages/nextjs.svg"
              width={24}
              height={24}
              alt="nextjs"
            />
          </StackSC>
          <StackSC direction="row">
            <Image
              loading="lazy"
              src="/images/languages/redux.svg"
              width={24}
              height={24}
              alt="redux"
            />
            <Image
              loading="lazy"
              src="/images/languages/sass.svg"
              width={24}
              height={24}
              alt="sass"
            />
            <Image
              loading="lazy"
              src="/images/languages/tailwind.svg"
              width={24}
              height={24}
              alt="tailwind"
            />
            <Image
              loading="lazy"
              src="/images/languages/firebase.svg"
              width={24}
              height={24}
              alt="firebase"
            />
            <Image
              loading="lazy"
              src="/images/languages/framer.svg"
              width={24}
              height={24}
              alt="framer"
            />
            <Image
              loading="lazy"
              src="/images/languages/materialui.svg"
              width={24}
              height={24}
              alt="materialui"
            />
          </StackSC>
        </div>
        <a
          href="/cv/taravannheng-cv.pdf"
          download="taravann-heng-cv"
          className={classes.hero__download_cv_button}
        >
          Download CV
        </a>
      </div>
      <div className={classes.hero__illustration}>
        <Image
          loading="eager"
          layout="responsive"
          src="/images/illustrations/illustration-work.png"
          width={100}
          height={100}
          alt="illustration of contact"
        />
      </div>
    </section>
  );
};

export default HeroSection;
