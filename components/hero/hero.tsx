import { useState, useEffect } from "react";
import Image from "next/image";

import classes from "./hero.module.scss";
import Avatar from "../avatar/avatar";
import { StackSC } from "./hero.style";

const HeroSection = () => {
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    const animationLoadedSS = sessionStorage.getItem("hero-animation-loaded");
    const isAnimationLoaded = JSON.parse(animationLoadedSS);

    if (isAnimationLoaded) {
      setAnimationLoaded(true);
    }

    if (!isAnimationLoaded) {
      setTimeout(() => {
        sessionStorage.setItem("hero-animation-loaded", JSON.stringify(true));
        setAnimationLoaded(true);
      }, 6000);
    }
  }, []);

  return (
    <section className={classes.hero}>
      <div
        className={`${classes.hero__body} ${
          !animationLoaded ? classes.fade_in : ""
        }`}
      >
        <div
          className={`${classes.hero__avatar} ${
            !animationLoaded ? classes.scale_in : ""
          }`}
        >
          <Avatar src="/images/profile/profile.jpg" />
        </div>
        <h1
          className={`${classes.hero__title} ${
            !animationLoaded ? classes.fade_in : ""
          }`}
        >
          Taravann Heng
        </h1>
        <h2
          className={`${classes.hero__subtitle} ${
            !animationLoaded ? classes.fade_in : ""
          }`}
        >
          Frontend Developer
        </h2>
        <p
          className={`${classes.hero__bio} ${
            !animationLoaded ? classes.fade_in : ""
          }`}
        >
          Hello, there! I&apos;m Taravann Heng, a developer. I have some
          experiences doing frontend development works for mobile apps and
          websites. Currently, I&apos;m focusing on frontend web development.
        </p>
        <div className={classes.hero__technology}>
          <p
            className={`${classes.technology__text}  ${
              !animationLoaded ? classes.fade_in : ""
            }`}
          >
            Some technologies I&apos;m familiar with:
          </p>
          <StackSC direction="row">
            <div
              className={`${classes.technology__icon} ${
                !animationLoaded ? classes.scale_in : ""
              }`}
            >
              <Image
                loading="lazy"
                src="/images/languages/aws.svg"
                width={24}
                height={24}
                alt="aws"
              />
            </div>
            <div
              className={`${classes.technology__icon} ${
                !animationLoaded ? classes.scale_in : ""
              }`}
            >
              <Image
                loading="lazy"
                src="/images/languages/javascript.svg"
                width={24}
                height={24}
                alt="javascript"
              />
            </div>
            <div
              className={`${classes.technology__icon} ${
                !animationLoaded ? classes.scale_in : ""
              }`}
            >
              <Image
                loading="lazy"
                src="/images/languages/typescript.svg"
                width={24}
                height={24}
                alt="typescript"
              />
            </div>
            <div
              className={`${classes.technology__icon} ${
                !animationLoaded ? classes.scale_in : ""
              }`}
            >
              <Image
                loading="lazy"
                src="/images/languages/python.svg"
                width={24}
                height={24}
                alt="python"
              />
            </div>
            <div
              className={`${classes.technology__icon} ${
                !animationLoaded ? classes.scale_in : ""
              }`}
            >
              <Image
                loading="lazy"
                src="/images/languages/react.svg"
                width={24}
                height={24}
                alt="react"
              />
            </div>
            <div
              className={`${classes.technology__icon} ${
                !animationLoaded ? classes.scale_in : ""
              }`}
            >
              <Image
                loading="lazy"
                src="/images/languages/nextjs.svg"
                width={24}
                height={24}
                alt="nextjs"
              />
            </div>
          </StackSC>
          <StackSC direction="row">
            <div
              className={`${classes.technology__icon} ${
                !animationLoaded ? classes.scale_in : ""
              }`}
            >
              <Image
                loading="lazy"
                src="/images/languages/redux.svg"
                width={24}
                height={24}
                alt="redux"
              />
            </div>
            <div
              className={`${classes.technology__icon} ${
                !animationLoaded ? classes.scale_in : ""
              }`}
            >
              <Image
                loading="lazy"
                src="/images/languages/sass.svg"
                width={24}
                height={24}
                alt="sass"
              />
            </div>
            <div
              className={`${classes.technology__icon} ${
                !animationLoaded ? classes.scale_in : ""
              }`}
            >
              <Image
                loading="lazy"
                src="/images/languages/tailwind.svg"
                width={24}
                height={24}
                alt="tailwind"
              />
            </div>
            <div
              className={`${classes.technology__icon} ${
                !animationLoaded ? classes.scale_in : ""
              }`}
            >
              <Image
                loading="lazy"
                src="/images/languages/firebase.svg"
                width={24}
                height={24}
                alt="firebase"
              />
            </div>
            <div
              className={`${classes.technology__icon} ${
                !animationLoaded ? classes.scale_in : ""
              }`}
            >
              <Image
                loading="lazy"
                src="/images/languages/framer.svg"
                width={24}
                height={24}
                alt="framer"
              />
            </div>
            <div
              className={`${classes.technology__icon} ${
                !animationLoaded ? classes.scale_in : ""
              }`}
            >
              <Image
                loading="lazy"
                src="/images/languages/materialui.svg"
                width={24}
                height={24}
                alt="materialui"
              />
            </div>
          </StackSC>
        </div>
        <a
          href="/cv/taravannheng-cv.pdf"
          download="taravann-heng-cv"
          className={`${classes.hero__download_cv_button} ${
            !animationLoaded ? classes.fade_in : ""
          }`}
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
