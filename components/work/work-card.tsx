import Link from 'next/link';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import classes from './work-card.module.scss';

const WorkCard = ({ company, logo, positions, url }) => {
  return (
    <div className={classes.work_card}>
      <div className={classes.work_card__logo}>
        <div>
          <Link href={url}>
            <a target="_blank">
              <Image priority src={logo} width={400} height={400} alt={company} />
            </a>
          </Link>
        </div>
      </div>
      <div className={classes.work_card__description}>
        {positions.map((position) => {
          const { id, title, startDate, endDate, duration, responsibilities } =
            position;

          return (
            <div className={classes.position} key={id}>
              <h3 className={classes.position__title}>{title}</h3>
              <p className={classes.position__date}>
                {startDate} - {endDate}{' '}
                <span className={classes.date__duration}>{duration}</span>
              </p>
              <div className={classes.position__responsibilities}>
                <p className={classes.responsibilities__text}>
                  Responsibilities include:
                </p>
                <ul
                  className={classes.responsibilities__list}
                  style={{
                    listStyleImage: `url("/images/others/list-style-${company}.svg")`,
                  }}
                >
                  {responsibilities.map((responsibility) => {
                    return (
                      <li key={uuidv4()}>
                        <span>{responsibility}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkCard;
