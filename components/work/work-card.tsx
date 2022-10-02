import Image from 'next/image';

import classes from './work-card.module.scss';

const WorkCard = ({ company, logo, positions }) => {
  return (
    <div className={classes.work_card}>
      <div className={classes.work_card__logo}>
        <div>
          <Image src={logo} width={400} height={400} alt={company} />
        </div>
      </div>
      <div className={classes.work_card__description}>
        {positions.map((position) => {
          const { id, title, startDate, endDate, duration, description } =
            position;

          return (
            <div className={classes.position} key={id}>
              <h3 className={classes.position__title}>{title}</h3>
              <p className={classes.position__date}>
                {startDate} - {endDate}{' '}
                <span className={classes.date__duration}>{duration}</span>
              </p>
              <p className={classes.position__description}>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkCard;
