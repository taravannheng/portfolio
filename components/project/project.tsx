import { useState } from 'react';
import Image from "next/image";
import useMediaQuery from '@mui/material/useMediaQuery';

import classes from "./project.module.scss";
import Carousel from "../carousel/carousel";
import projectData from "../../data/project";
import LargeCarousel from '../large-carousel/largeCarousel';

const ProjectSection = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const isSmallScreen = useMediaQuery('(max-width: 840px)');

  return (
    <section className={classes.project}>
      <div className={classes.project__body}>
        {isSmallScreen && <Carousel data={projectData[activeProjectIndex].slides} projects={projectData} activeProjectIndex={activeProjectIndex} setActiveProjectIndex={setActiveProjectIndex}  />}
        {!isSmallScreen && <LargeCarousel data={projectData[activeProjectIndex].slides} projects={projectData} activeProjectIndex={activeProjectIndex} setActiveProjectIndex={setActiveProjectIndex} />}
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
