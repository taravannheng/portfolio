import { FC, useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  PlayCircleFilledOutlined,
} from "@mui/icons-material";

import classes from "./carousel.module.scss";
import { ActiveIndicatorStackSC } from "./carousel.style";
import Loader from "../loader/loader";

interface CarouselInterface {
  data: any[];
  activeIndex?: number;
  verticalOnly?: boolean;
  backHandler?: () => void;
  nextHandler?: () => void;
  itemIndex?: number;
  isProjectSelected?: boolean;
  setIsProjectSelected?: (index) => void;
  activeProjectIndex?: number | null;
  setActiveProjectIndex?: (index) => void;
  setHoveredProjectIndex?: (index) => void;
  hoveredProjectIndex?: number | null;
  projects?: any[];
}

const CarouselControl: FC<CarouselInterface> = ({
  data,
  activeIndex,
  backHandler,
  nextHandler,
  activeProjectIndex,
  isProjectSelected,
  setActiveProjectIndex,
  setIsProjectSelected,
  hoveredProjectIndex,
  setHoveredProjectIndex
}) => {
  return (
    <>
      <div className={classes.carousel__control}>
        <button onClick={backHandler} className={classes.control__button}>
          <ArrowLeft />
        </button>
        <ActiveIndicatorStackSC direction="row" spacing={1.5}>
          {data.map((item, index) => {
            return (
              <div
                key={`indicator-${index}`}
                className={`${classes.control__indicator} ${
                  activeIndex === index ? classes.control__active_indicator : ""
                }`}
              ></div>
            );
          })}
          <div
            key={`indicator-${data.length}`}
            className={`${classes.control__indicator} ${
              activeIndex === data.length
                ? classes.control__active_indicator
                : ""
            }`}
          ></div>
        </ActiveIndicatorStackSC>
        <button onClick={nextHandler} className={classes.control__button}>
          {isProjectSelected ? <PlayCircleFilledOutlined /> : <ArrowRight />}
        </button>
      </div>
    </>
  );
};

const SummarySlide: FC<CarouselInterface> = ({
  data,
  verticalOnly,
  activeIndex,
  itemIndex,
}) => {
  return (
    <>
      <div
        style={{ transform: `translateY(-${activeIndex * 100}%)` }}
        className={`${classes.body__content} ${
          verticalOnly ? classes.vertical_only : ""
        }`}
      >
        <div className={`${classes.content__media} ${classes.shimmer}`}>
          {data[0].isFeatured && (
            <div className={classes.featured_chip}>
              <div className={classes.featured_chip__dot}></div>
              <span className={classes.featured_chip__text}>Featured</span>
            </div>
          )}
          <Image
            loading="lazy"
            src={data[itemIndex].imgUrl}
            alt={data[itemIndex].title}
            width={100}
            height={72}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={classes.content__body}>
          <h1
            className={`${classes.body__title} ${classes.body__title_summary}`}
          >
            {data[itemIndex].title}
          </h1>
          <p className={classes.body__description_summary}>
            {data[itemIndex].description.split("\n").map((item, index) => {
              return (
                <>
                  <span>{item}</span>
                  <br />
                  <br />
                </>
              );
            })}
          </p>
        </div>
      </div>
    </>
  );
};

const FunctionalitySlide: FC<CarouselInterface> = ({
  data,
  verticalOnly,
  activeIndex,
  itemIndex,
}) => {
  return (
    <>
      <div
        style={{ transform: `translateY(-${activeIndex * 100}%)` }}
        className={`${classes.body__content} ${
          verticalOnly ? classes.vertical_only : ""
        }`}
      >
        <div className={`${classes.content__media} ${classes.shimmer}` }>
          {data[0].isFeatured && (
            <div className={classes.featured_chip}>
              <div className={classes.featured_chip__dot}></div>
              <span className={classes.featured_chip__text}>Featured</span>
            </div>
          )}
          <Image
            loading="lazy"
            src={data[itemIndex].imgUrl}
            alt={data[itemIndex].title}
            width={100}
            height={72}
            layout="responsive"
            objectFit="fill"
          />
        </div>
        <div className={classes.content__body}>
          <h1
            className={`${classes.body__title} ${classes.body__title_functionality}`}
          >
            {data[itemIndex].title}
          </h1>
          <div
            className={`${classes.functionality_item__stack_container} ${classes.stack_grid}`}
          >
            {data[itemIndex].items.map((item, index) => {
              return (
                <div
                  key={`function-${index}`}
                  className={classes.stack_grid__item}
                >
                  <span className={classes.stack_grid__item_icon}>
                    {item.icon}
                  </span>
                  <span className={classes.stack_grid__item_text}>
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const TechnologySlide: FC<CarouselInterface> = ({
  data,
  verticalOnly,
  activeIndex,
  itemIndex,
}) => {
  return (
    <>
      <div
        style={{ transform: `translateY(-${activeIndex * 100}%)` }}
        className={`${classes.body__content} ${
          verticalOnly ? classes.vertical_only : ""
        }`}
      >
        <div className={`${classes.content__media} ${classes.shimmer}` }>
          {data[0].isFeatured && (
            <div className={classes.featured_chip}>
              <div className={classes.featured_chip__dot}></div>
              <span className={classes.featured_chip__text}>Featured</span>
            </div>
          )}
          <Image
            loading="lazy"
            src={data[itemIndex].imgUrl}
            alt={data[itemIndex].title}
            width={100}
            height={72}
            layout="responsive"
            objectFit="fill"
          />
        </div>
        <div className={classes.content__body}>
          <h1
            className={`${classes.body__title} ${classes.body__title_functionality}`}
          >
            {data[itemIndex].title}
          </h1>
          <div
            className={`${classes.technology_item__stack_container} ${classes.stack_grid}`}
          >
            {data[itemIndex].items.map((item, index) => {
              return (
                <div
                  key={`technology-${index}`}
                  className={classes.stack_grid__item}
                >
                  <span className={classes.stack_grid__item_icon}>
                    <Image
                      loading="lazy"
                      src={item.icon}
                      width={16}
                      height={16}
                      alt="aws"
                    />
                  </span>
                  <span className={classes.stack_grid__item_text}>
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const SocialSlide: FC<CarouselInterface> = ({
  data,
  verticalOnly,
  activeIndex,
  itemIndex,
}) => {
  return (
    <>
      <div
        style={{ transform: `translateY(-${activeIndex * 100}%)` }}
        className={`${classes.body__content} ${
          verticalOnly ? classes.vertical_only : ""
        }`}
      >
        <div className={`${classes.content__media} ${classes.shimmer}` }>
          {data[0].isFeatured && (
            <div className={classes.featured_chip}>
              <div className={classes.featured_chip__dot}></div>
              <span className={classes.featured_chip__text}>Featured</span>
            </div>
          )}
          <Image
            loading="lazy"
            src={data[itemIndex].imgUrl}
            alt={data[itemIndex].title}
            width={100}
            height={72}
            layout="responsive"
            objectFit="fill"
          />
        </div>
        <div className={classes.content__body}>
          <h1
            className={`${classes.body__title} ${classes.body__title_functionality}`}
          >
            {data[itemIndex].title}
          </h1>
          <div
            className={`${classes.social_item__stack_container} ${classes.social_grid}`}
          >
            {data[itemIndex].items.map((item, index) => {
              return (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  key={`social-${index}`}
                  className={classes.social_grid__item}
                >
                  <span className={classes.social_grid__item_icon}>
                    <Image
                      loading="lazy"
                      src={item.icon}
                      width={24}
                      height={24}
                      alt="aws"
                    />
                  </span>
                  <span className={classes.social_grid__item_text}>
                    {item.text}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const AllProjectsSlide: FC<CarouselInterface> = ({
  data,
  verticalOnly,
  activeIndex,
  itemIndex,
  projects,
  setIsProjectSelected,
  setHoveredProjectIndex,
  hoveredProjectIndex,
  isProjectSelected,
}) => {
  const projectClickHandler = (index) => {
    setIsProjectSelected(true);
    setHoveredProjectIndex(index);
  };

  const projectMouseEnterHandler = (index) => {
    setIsProjectSelected(true);
    setHoveredProjectIndex(index);
  };

  // const projectMouseLeaveHandler = (index) => {
  //   setIsProjectSelected(false);
  //   setHoveredProjectIndex(null);
  // };

  return (
    <>
      <div
        style={{ transform: `translateY(-${activeIndex * 100}%)` }}
        className={`${classes.body__content} ${classes.all_projects}`}
      >
        <h2 className={classes.all_projects__title}>More Projects</h2>
        <ul className={classes.all_projects__list}>
          {projects &&
            projects.map((project, index) => {
              return (
                <>
                  <li
                    key={`project-${index}`}
                    className={`${classes.all_projects__list_item} ${classes.shimmer}`}
                    onClick={() => projectClickHandler(index)}
                    onMouseEnter={() => projectMouseEnterHandler(index)}
                    // onMouseLeave={() => projectMouseLeaveHandler(index)}
                    style={{
                      opacity: `${
                        index === hoveredProjectIndex || !isProjectSelected
                          ? 1
                          : 0.5
                      }`,
                    }}
                  >
                    <Image
                      loading="lazy"
                      src={project.imgUrl}
                      alt={project.id}
                      width={195}
                      height={195}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </li>
                </>
              );
            })}
        </ul>
        <p
          className={classes.all_projects__select_text}
          style={{ opacity: `${!isProjectSelected ? 1 : 0}` }}
        >
          Select a project
        </p>
        <p
          className={classes.all_projects__play_text}
          style={{ opacity: `${isProjectSelected ? 1 : 0}` }}
        >
          <span className={classes.all_projects__play_text_content}>
            To view press 👇
          </span>
        </p>
      </div>
    </>
  );
};

const Carousel: FC<CarouselInterface> = ({
  data,
  verticalOnly = false,
  projects,
  activeProjectIndex,
  setActiveProjectIndex
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isProjectSelected, setIsProjectSelected] = useState(false);
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null);

  const backHandler = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }

    //reset
    setIsProjectSelected(false);
    setHoveredProjectIndex(null);
  };

  const nextHandler = () => {
    if (activeIndex < data.length) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }

    if (isProjectSelected && hoveredProjectIndex !== null) {
      setActiveIndex(0);
      setActiveProjectIndex(hoveredProjectIndex);

      //reset
      setIsProjectSelected(false);
      setHoveredProjectIndex(null);
    }
  };

  return (
    <>
      <div className={classes.carousel}>
        <div className={classes.carousel__body}>
          {data.map((item, index) => {
            if (item.type === "summary") {
              return (
                <SummarySlide
                  key={`slide-${index}`}
                  itemIndex={index}
                  activeIndex={activeIndex}
                  data={data}
                  verticalOnly
                />
              );
            }

            if (item.type === "functionality") {
              return (
                <FunctionalitySlide
                  key={`slide-${index}`}
                  itemIndex={index}
                  activeIndex={activeIndex}
                  data={data}
                  verticalOnly
                />
              );
            }

            if (item.type === "technology") {
              return (
                <TechnologySlide
                  key={`slide-${index}`}
                  itemIndex={index}
                  activeIndex={activeIndex}
                  data={data}
                  verticalOnly
                />
              );
            }

            if (item.type === "socials") {
              return (
                <SocialSlide
                  key={`slide-${index}`}
                  itemIndex={index}
                  activeIndex={activeIndex}
                  data={data}
                  verticalOnly
                />
              );
            }
          })}

          {/* last slide */}

          {
            <AllProjectsSlide
              projects={projects}
              itemIndex={data.length}
              activeIndex={activeIndex}
              isProjectSelected={isProjectSelected}
              setIsProjectSelected={setIsProjectSelected}
              hoveredProjectIndex={hoveredProjectIndex}
              setHoveredProjectIndex={setHoveredProjectIndex}
              data={data}
            />
          }
        </div>
        <CarouselControl
          data={data}
          activeIndex={activeIndex}
          activeProjectIndex={activeProjectIndex}
          backHandler={backHandler}
          nextHandler={nextHandler}
          isProjectSelected={isProjectSelected}
          setIsProjectSelected={setIsProjectSelected}
          hoveredProjectIndex={hoveredProjectIndex}
          setHoveredProjectIndex={setHoveredProjectIndex}
          setActiveProjectIndex={setActiveProjectIndex}
        />
      </div>
    </>
  );
};

export default Carousel;
