import Image from 'next/image';

import classes from './work.module.scss';
import WorkCard from './work-card';

import workExperience from '../../data/work-experience';

const WorkSection = () => {
  return (
    <section className={classes.work} id="works">
      <h2 className={classes.work__title}>Work Experience</h2>
      <div className={classes.content}>
        <div className={classes.content__list}>
          <div className={classes.list__left_section}>
            <WorkCard url={workExperience[0].url} company={workExperience[0].company} logo={workExperience[0].logo} positions={workExperience[0].positions} />
          </div>
        </div>
        <div className={classes.content__illustration}>
          <Image loading='eager' layout='responsive' src='/images/illustrations/illustration-work.png' width={800} height={800} alt="illustration of work" />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
