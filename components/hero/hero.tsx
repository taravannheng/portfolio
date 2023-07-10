import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import classes from "./hero.module.scss";
import Avatar from "../avatar/avatar";
import { StackSC } from "./hero.style";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const scaleInVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 }
}

const twistInVariants = {
  hidden: { scale: 0},
  visible: { scale: 1, rotate: 360 }
}

const scrollUpVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

const HeroSection = ({ animationLoaded, setAnimationLoaded }) => {
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
      <motion.div
        initial={animationLoaded ? "visible" : "hidden"}
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.3, delay: 1 }}
        className={`${classes.hero__body}`}
      >
        <motion.div
          initial={animationLoaded ? "visible" : "hidden"}
          animate="visible"
          variants={twistInVariants}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.5, 
            delay: 1.5
          }}
          className={`${classes.hero__avatar}`}
        >
          <Avatar src="/images/profile/profile.jpg" />
        </motion.div>
        <motion.h1
          className={`${classes.hero__title}`}
          initial={animationLoaded ? "visible" : "hidden"}
          animate="visible"
          variants={scrollUpVariants}
          transition={{ duration: 0.5, delay: 2.0 }}
        >
          Taravann Heng
        </motion.h1>
        <motion.h2
          className={`${classes.hero__subtitle}`}
          initial={animationLoaded ? "visible" : "hidden"}
          animate="visible"
          variants={scrollUpVariants}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          Frontend Developer
        </motion.h2>
        <motion.p
          className={`${classes.hero__bio}`}
          initial={animationLoaded ? "visible" : "hidden"}
          animate="visible"
          variants={scrollUpVariants}
          transition={{ duration: 0.5, delay: 3.0 }}
        >
          Hello, there! I&apos;m Taravann Heng, a developer. I have some
          experiences doing frontend development works for mobile apps and
          websites. Currently, I&apos;m focusing on frontend web development.
        </motion.p>
        <div className={classes.hero__technology}>
          <motion.p
            className={`${classes.technology__text}`}
            initial={animationLoaded ? "visible" : "hidden"}
            animate="visible"
            variants={scrollUpVariants}
            transition={{ duration: 0.5, delay: 3.5 }}
          >
            Some technologies I&apos;m familiar with:
          </motion.p>
          <StackSC direction="row">
            <motion.div
              className={`${classes.technology__icon}`}
              initial={animationLoaded ? "visible" : "hidden"}
              animate="visible"
              variants={scaleInVariants}
              transition={{ duration: 0.2, delay: 3.7 }}
            >
              <Image
                loading="lazy"
                src="/images/languages/aws.svg"
                width={24}
                height={24}
                alt="aws"
              />
            </motion.div>
            <motion.div
              className={`${classes.technology__icon}`}
              initial={animationLoaded ? "visible" : "hidden"}
              animate="visible"
              variants={scaleInVariants}
              transition={{ duration: 0.2, delay: 3.9 }}
            >
              <Image
                loading="lazy"
                src="/images/languages/javascript.svg"
                width={24}
                height={24}
                alt="javascript"
              />
            </motion.div>
            <motion.div
              className={`${classes.technology__icon}`}
              initial={animationLoaded ? "visible" : "hidden"}
              animate="visible"
              variants={scaleInVariants}
              transition={{ duration: 0.2, delay: 4.1 }}
            >
              <Image
                loading="lazy"
                src="/images/languages/typescript.svg"
                width={24}
                height={24}
                alt="typescript"
              />
            </motion.div>
            <motion.div
              className={`${classes.technology__icon}`}
              initial={animationLoaded ? "visible" : "hidden"}
              animate="visible"
              variants={scaleInVariants}
              transition={{ duration: 0.2, delay: 4.3 }}
            >
              <Image
                loading="lazy"
                src="/images/languages/python.svg"
                width={24}
                height={24}
                alt="python"
              />
            </motion.div>
            <motion.div
              className={`${classes.technology__icon}`}
              initial={animationLoaded ? "visible" : "hidden"}
              animate="visible"
              variants={scaleInVariants}
              transition={{ duration: 0.2, delay: 4.5 }}
            >
              <Image
                loading="lazy"
                src="/images/languages/react.svg"
                width={24}
                height={24}
                alt="react"
              />
            </motion.div>
            <motion.div
              className={`${classes.technology__icon}`}
              initial={animationLoaded ? "visible" : "hidden"}
              animate="visible"
              variants={scaleInVariants}
              transition={{ duration: 0.2, delay: 4.7 }}
            >
              <Image
                loading="lazy"
                src="/images/languages/nextjs.svg"
                width={24}
                height={24}
                alt="nextjs"
              />
            </motion.div>
          </StackSC>
          <StackSC direction="row">
            <motion.div
              className={`${classes.technology__icon}`}
              initial={animationLoaded ? "visible" : "hidden"}
              animate="visible"
              variants={scaleInVariants}
              transition={{ duration: 0.2, delay: 4.9 }}
            >
              <Image
                loading="lazy"
                src="/images/languages/redux.svg"
                width={24}
                height={24}
                alt="redux"
              />
            </motion.div>
            <motion.div
              className={`${classes.technology__icon}`}
              initial={animationLoaded ? "visible" : "hidden"}
              animate="visible"
              variants={scaleInVariants}
              transition={{ duration: 0.2, delay: 5.1 }}
            >
              <Image
                loading="lazy"
                src="/images/languages/sass.svg"
                width={24}
                height={24}
                alt="sass"
              />
            </motion.div>
            <motion.div
              className={`${classes.technology__icon}`}
              initial={animationLoaded ? "visible" : "hidden"}
              animate="visible"
              variants={scaleInVariants}
              transition={{ duration: 0.2, delay: 5.3 }}
            >
              <Image
                loading="lazy"
                src="/images/languages/tailwind.svg"
                width={24}
                height={24}
                alt="tailwind"
              />
            </motion.div>
            <motion.div
              className={`${classes.technology__icon}`}
              initial={animationLoaded ? "visible" : "hidden"}
              animate="visible"
              variants={scaleInVariants}
              transition={{ duration: 0.2, delay: 5.5 }}
            >
              <Image
                loading="lazy"
                src="/images/languages/firebase.svg"
                width={24}
                height={24}
                alt="firebase"
              />
            </motion.div>
            <motion.div
              className={`${classes.technology__icon}`}
              initial={animationLoaded ? "visible" : "hidden"}
              animate="visible"
              variants={scaleInVariants}
              transition={{ duration: 0.2, delay: 5.7 }}
            >
              <Image
                loading="lazy"
                src="/images/languages/framer.svg"
                width={24}
                height={24}
                alt="framer"
              />
            </motion.div>
            <motion.div
              className={`${classes.technology__icon}`}
              initial={animationLoaded ? "visible" : "hidden"}
              animate="visible"
              variants={scaleInVariants}
              transition={{ duration: 0.2, delay: 5.9 }}
            >
              <Image
                loading="lazy"
                src="/images/languages/materialui.svg"
                width={24}
                height={24}
                alt="materialui"
              />
            </motion.div>
          </StackSC>
        </div>
        <motion.a
          href="/cv/taravannheng-cv.pdf"
          download="taravann-heng-cv"
          className={`${classes.hero__download_cv_button}`}
          initial={animationLoaded ? "visible" : "hidden"}
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.3, delay: 6.1 }}
        >
          Download CV
        </motion.a>
      </motion.div>
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
