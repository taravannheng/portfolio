import classes from './work.module.scss';
import WorkCard from './work-card';

import workExperience from '../../data/work-experience';

const WorkSection = () => {
  return (
    <div className={classes.work}>
      <h2 className={classes.work__title}>Work Experience</h2>
      <div className={classes.work__list}>
        <div className={classes.list__left_section}>
          <WorkCard logo={workExperience[0].logo} positions={workExperience[0].positions} />
        </div>
        <div className={classes.list__right_section}>
          <WorkCard logo={workExperience[1].logo} positions={workExperience[1].positions} />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
