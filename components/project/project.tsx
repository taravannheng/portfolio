import Image from "next/image";
import useMediaQuery from '@mui/material/useMediaQuery';

import classes from "./project.module.scss";
import Carousel from "../carousel/carousel";
import projectData from "../../data/project";
import LargeCarousel from '../large-carousel/largeCarousel';

const ProjectSection = () => {
  const isSmallScreen = useMediaQuery('(max-width:840px)');

  if (isSmallScreen) {
    console.log('yes');
  }

  return (
    <section className={classes.project}>
      <div className={classes.project__body}>
        {isSmallScreen && <Carousel data={projectData.marketsquare} />}
        {!isSmallScreen && <LargeCarousel data={projectData.marketsquare} />}
      </div>
      <div className={classes.project__illustration}>
        <Image
          loading="eager"
          layout="responsive"
          src="/images/illustrations/illustration-skill.png"
          width={100}
          height={100}
          alt="illustration of contact"
        />
      </div>
    </section>
  );
};

export default ProjectSection;
