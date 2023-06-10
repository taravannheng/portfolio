import { FC, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  PlayCircleFilledOutlined,
} from "@mui/icons-material";

import classes from "./largeCarousel.module.scss";
import { ActiveIndicatorStackSC } from "./largeCarousel.style";

interface LargeCarouselInterface {
  //
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
  shakeControlButton?: boolean;
  //
}

const CarouselControl: FC<LargeCarouselInterface> = ({
  data,
  activeIndex,
  backHandler,
  nextHandler,
  activeProjectIndex,
  isProjectSelected,
  setActiveProjectIndex,
  setIsProjectSelected,
  hoveredProjectIndex,
  setHoveredProjectIndex,
  shakeControlButton
}) => {
  return (
    <>
      <div className={classes.control__container}>
        <button onClick={backHandler} className={`${classes.control__button} ${shakeControlButton && activeIndex === 0 ? classes.shake : ''}`}>
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
        <button onClick={nextHandler} className={`${classes.control__button} ${isProjectSelected ? classes.play : ''} ${shakeControlButton && activeIndex > 0 ? classes.shake : ''}`}>
          {isProjectSelected ? <div className={classes.scalePlayButton}><PlayCircleFilledOutlined /></div> : <ArrowRight />}
        </button>
      </div>
    </>
  );
};

const SummarySlide: FC<LargeCarouselInterface> = ({
  data,
  verticalOnly,
  activeIndex,
  itemIndex,
}) => {
  return (
    <>
      <div
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        className={`${classes.body__item} ${classes.summary_item}`}
      >
        {" "}
        {/* animate here - make a slide component here */}
        <h1 className={classes.summary_item__title}>{data[itemIndex].title}</h1>
        <p className={classes.summary_item__description}>
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
    </>
  );
};

const TechnologySlide: FC<LargeCarouselInterface> = ({
  data,
  verticalOnly,
  activeIndex,
  itemIndex,
}) => {
  return (
    <>
      <div
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        className={`${classes.body__item} ${classes.technology_item}`}
      >
        {" "}
        {/* animate here - make a slide component here */}
        <h2 className={classes.technology_item__title}>
          {data[itemIndex].title}
        </h2>
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
                    width={24}
                    height={24}
                    alt="aws"
                  />
                </span>
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const FunctionalitySlide: FC<LargeCarouselInterface> = ({
  data,
  verticalOnly,
  activeIndex,
  itemIndex,
}) => {
  return (
    <>
      <div
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        className={`${classes.body__item} ${classes.functionality_item}`}
      >
        {" "}
        {/* animate here - make a slide component here */}
        <h2 className={classes.functionality_item__title}>
          {data[itemIndex].title}
        </h2>
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
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const SocialSlide: FC<LargeCarouselInterface> = ({
  data,
  verticalOnly,
  activeIndex,
  itemIndex,
}) => {
  return (
    <>
      <div
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        className={`${classes.body__item} ${classes.social_item}`}
      >
        {" "}
        {/* animate here - make a slide component here */}
        <h2 className={classes.social_item__title}>{data[itemIndex].title}</h2>
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
                {item.text}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

const AllProjectsSlide: FC<LargeCarouselInterface> = ({
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
  return (
    <>
      <div
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        className={`${classes.body__item} ${classes.all_projects_slide}`}
      >
        <h2 className={classes.all_projects_slide__title}>More Projects</h2>
        <div className={classes.all_projects_slide__preview}>
          {isProjectSelected && (
            <div className={classes.all_projects_slide__preview_display}>
              <Image
                loading="lazy"
                src={projects[hoveredProjectIndex].previewImgUrl}
                alt={"Project Preview"}
                width={360}
                height={210}
                layout="fixed"
                objectFit="cover"
              />
            </div>
          )}
          {!isProjectSelected && (
            <Image
              loading="lazy"
              src={
                "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d2496.appspot.com/o/hand.gif?alt=media&token=85746db7-17d9-492e-8ac7-c355f476ac37&_gl=1*19vin9u*_ga*ODg2ODY0MDE0LjE2ODYzODc1NDk.*_ga_CW55HF8NVT*MTY4NjM4NzU0OC4xLjEuMTY4NjM4NzU3OS4wLjAuMA.."
              }
              alt={"hand gesture"}
              width={300}
              height={200}
              layout="fixed"
              objectFit="cover"
            />
          )}
        </div>
        <p className={classes.all_projects_slide__select_text}>
          {hoveredProjectIndex !== null ? (
            <span>{projects[hoveredProjectIndex].shortDescription}</span>
          ) : (
            <span>Select a project to see more...</span>
          )}
        </p>
      </div>
    </>
  );
};

const AllProjectsMedia: FC<LargeCarouselInterface> = ({
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
    if (index !== null) {
      setIsProjectSelected(true);
      setHoveredProjectIndex(index);
    }
  };

  return (
    <>
      <div
        onClick={() => projectClickHandler(null)}
        style={{ transform: `translateY(-${activeIndex * 100}%)` }}
        className={`${classes.media__item} ${classes.all_projects}`}
      >
        <ul className={classes.all_projects__list}>
          {projects &&
            projects.map((project, index) => {
              return (
                <>
                  <li
                    key={`project-${index}`}
                    className={`${classes.all_projects__list_item} ${classes.shimmer}`}
                    onClick={() => projectClickHandler(index)}
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
      </div>
    </>
  );
};

const LargeCarousel: FC<LargeCarouselInterface> = ({
  data,
  projects,
  activeProjectIndex,
  setActiveProjectIndex,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isProjectSelected, setIsProjectSelected] = useState(false);
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null);
  const [shakeControlButton, setShakeControlButton] = useState(false);

  const backHandler = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }

    if (activeIndex - 1 < 0) {
      setShakeControlButton(true)

      setTimeout(() => {
        setShakeControlButton(false);
      }, 1000);
    }


    //reset
    setIsProjectSelected(false);
    setHoveredProjectIndex(null);
  };

  const nextHandler = () => {
    if (activeIndex < data.length) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }

    if (activeIndex + 1 > data.length) {
      setShakeControlButton(true)

      setTimeout(() => {
        setShakeControlButton(false);
      }, 1000);
    }

    if (isProjectSelected && hoveredProjectIndex !== null) {
      setActiveIndex(0);
      setActiveProjectIndex(hoveredProjectIndex);

      console.log(hoveredProjectIndex);

      //reset
      setIsProjectSelected(false);
      setHoveredProjectIndex(null);
    }
  };

  return (
    <>
      <div className={classes.carousel}>
        <div className={`${classes.carousel__media}` }>
          {data[0].isFeatured && activeIndex < data.length && (
            <div className={classes.featured_chip}>
              <div className={classes.featured_chip__dot}></div>
              <span className={classes.featured_chip__text}>Featured</span>
            </div>
          )}
          {/* load all images here */}
          {data.map((item, index) => {
            return (
              <div
                key={`large-media-${index}`}
                className={`${classes.media__item} ${classes.shimmer}`}
                style={{ transform: `translateY(-${activeIndex * 100}%)` }}
              >
                {" "}
                {/* animate here */}
                <Image
                  loading="lazy"
                  src={data[index].imgUrl}
                  alt={data[index].title}
                  width={100}
                  height={100}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            );
          })}
          <AllProjectsMedia
            projects={projects}
            itemIndex={data.length}
            activeIndex={activeIndex}
            isProjectSelected={isProjectSelected}
            setIsProjectSelected={setIsProjectSelected}
            hoveredProjectIndex={hoveredProjectIndex}
            setHoveredProjectIndex={setHoveredProjectIndex}
            data={data}
          />
        </div>
        <div className={classes.carousel__content}>
          <div className={classes.content__body}>
            {/* load all content here */}
            {data.map((item: any, index: number) => {
              if (item.type === "summary") {
                return (
                  <>
                    <SummarySlide
                      key={`large-carousel-content-${index}`}
                      activeIndex={activeIndex}
                      data={data}
                      verticalOnly
                      itemIndex={index}
                    />
                  </>
                );
              }
              if (item.type === "functionality") {
                return (
                  <>
                    <FunctionalitySlide
                      key={`large-carousel-content-${index}`}
                      activeIndex={activeIndex}
                      data={data}
                      verticalOnly
                      itemIndex={index}
                    />
                  </>
                );
              }
              if (item.type === "technology") {
                return (
                  <>
                    <TechnologySlide
                      key={`large-carousel-content-${index}`}
                      activeIndex={activeIndex}
                      data={data}
                      verticalOnly
                      itemIndex={index}
                    />
                  </>
                );
              }
              if (item.type === "socials") {
                return (
                  <>
                    <SocialSlide
                      key={`large-carousel-content-${index}`}
                      activeIndex={activeIndex}
                      data={data}
                      verticalOnly
                      itemIndex={index}
                    />
                  </>
                );
              }
            })}
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
          </div>
          <div className={classes.content__control}>
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
              shakeControlButton={shakeControlButton}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LargeCarousel;
