import { FC, useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  PlayCircleFilledOutlined,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Lottie from "react-lottie";

import classes from "./largeCarousel.module.scss";
import { ActiveIndicatorStackSC } from "./largeCarousel.style";
import handAnimation from "../../data/hand.json";

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
  localData?: any;
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
  shakeControlButton,
}) => {
  return (
    <>
      <div className={classes.control__container}>
        <motion.button
          onClick={backHandler}
          className={`${classes.control__button}`}
          initial={{ opacity: 1 }}
          animate={
            shakeControlButton && activeIndex === 0
              ? {
                  translateX: [0, -10, 10, -10, 10, 0],
                  transition: { duration: 0.3 },
                }
              : {}
          }
          whileTap={{ translateX: 0 }}
        >
          <ArrowLeft />
        </motion.button>
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
        <motion.button
          initial={{ opacity: 1 }}
          animate={
            shakeControlButton && activeIndex > 0
              ? {
                  translateX: [0, -10, 10, -10, 10, 0],
                  transition: { duration: 0.3 },
                }
              : {}
          }
          whileTap={{ translateX: 0 }}
          onClick={nextHandler}
          className={`${classes.control__button} ${
            isProjectSelected ? classes.play : ""
          }`}
        >
          {isProjectSelected ? (
            <motion.div
              initial={{ scale: 1 }}
              animate={
                isProjectSelected
                  ? {
                      scale: [1, 1.2, 1],
                      transition: { duration: 1, repeat: Infinity },
                    }
                  : {}
              }
            >
              <PlayCircleFilledOutlined />
            </motion.div>
          ) : (
            <ArrowRight />
          )}
        </motion.button>
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
      <motion.div
        initial={{ translateX: 0 }}
        animate={{ translateX: `-${activeIndex * 100}%` }}
        transition={{ duration: 0.1, type: "spring" }}
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
      </motion.div>
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
      <motion.div
        initial={{ translateX: 0 }}
        animate={{ translateX: `-${activeIndex * 100}%` }}
        transition={{ duration: 0.1, type: "spring" }}
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
      </motion.div>
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
      <motion.div
        initial={{ translateX: 0 }}
        animate={{ translateX: `-${activeIndex * 100}%` }}
        transition={{ duration: 0.1, type: "spring" }}
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
      </motion.div>
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
      <motion.div
        initial={{ translateX: 0 }}
        animate={{ translateX: `-${activeIndex * 100}%` }}
        transition={{ duration: 0.1, type: "spring" }}
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
      </motion.div>
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
  localData,
}) => {
  const [previewData, setPreviewData] = useState(null);

  const fetchAnimation = async (url) => {
    if (!url) {
      console.error("Empty URL provided.");
      return null;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching animation data:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchPreviews = async () => {
      const dataPromises = projects.map((project, index) =>
        fetchAnimation(project.previewImgUrl)
      );
      const fetchedData = await Promise.all(dataPromises);
      const data = fetchedData.map((item, index) => {
        return item ? item : localData.imagePlaceholder;
      });
      setPreviewData(data);
    };

    fetchPreviews();
  }, []);

  return (
    <>
      <motion.div
        initial={{ translateX: 0 }}
        animate={{ translateX: `-${activeIndex * 100}%` }}
        transition={{ duration: 0.1, type: "spring" }}
        className={`${classes.body__item} ${classes.all_projects_slide}`}
      >
        <h2 className={classes.all_projects_slide__title}>More Projects</h2>
        <div className={classes.all_projects_slide__preview}>
          {isProjectSelected && (
            <div className={classes.all_projects_slide__preview_display}>
              {previewData && (
                <Lottie
                  options={{
                    loop: false,
                    autoplay: true,
                    animationData: previewData[hoveredProjectIndex],
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid meet",
                    },
                  }}
                />
              )}
            </div>
          )}
          {!isProjectSelected && (
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: handAnimation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid meet",
                },
              }}
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
      </motion.div>
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
  localData,
}) => {
  const [animationData, setAnimationData] = useState(null);

  const fetchAnimation = async (url) => {
    if (!url) {
      console.error("Empty URL provided.");
      return null;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching animation data:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchLogos = async () => {
      const dataPromises = projects.map((project, index) =>
        fetchAnimation(project.imgUrl)
      );
      const fetchedData = await Promise.all(dataPromises);
      const data = fetchedData.map((item, index) => {
        return item ? item : localData.imagePlaceholder;
      });

      setAnimationData(data);
    };

    fetchLogos();
  }, []);

  const projectClickHandler = (index) => {
    if (index !== null) {
      setIsProjectSelected(true);
      setHoveredProjectIndex(index);
    }
  };

  return (
    <>
      <motion.div
        onClick={() => projectClickHandler(null)}
        initial={{ translateY: 0 }}
        animate={{ translateY: `-${activeIndex * 100}%` }}
        transition={{ duration: 0.1, type: "spring" }}
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
                    {animationData && (
                      <Lottie
                        options={{
                          loop: true,
                          autoplay: true,
                          animationData: animationData[index],
                          rendererSettings: {
                            preserveAspectRatio: "xMidYMid slice",
                          },
                        }}
                      />
                    )}
                  </li>
                </>
              );
            })}
        </ul>
      </motion.div>
    </>
  );
};

const LargeCarousel: FC<LargeCarouselInterface> = ({
  data,
  projects,
  activeProjectIndex,
  setActiveProjectIndex,
  localData,
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
      setShakeControlButton(true);

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
      setShakeControlButton(true);

      setTimeout(() => {
        setShakeControlButton(false);
      }, 1000);
    }

    if (isProjectSelected && hoveredProjectIndex !== null) {
      setActiveIndex(0);
      setActiveProjectIndex(hoveredProjectIndex);

      //reset
      setIsProjectSelected(false);
      setHoveredProjectIndex(null);
      setShakeControlButton(false);
    }
  };

  return (
    <>
      <div className={classes.carousel}>
        <div className={`${classes.carousel__media}`}>
          {data[0].isFeatured && activeIndex < data.length && (
            <div className={classes.featured_chip}>
              <div className={classes.featured_chip__dot}></div>
              <span className={classes.featured_chip__text}>Featured</span>
            </div>
          )}
          {/* load all images here */}
          {data.map((item, index) => {
            return (
              <motion.div
                key={`large-media-${index}`}
                className={`${classes.media__item} ${classes.shimmer}`}
                initial={{ translateY: 0 }}
                animate={{ translateY: `-${activeIndex * 100}%` }}
                transition={{ duration: 0.1, type: "spring" }}
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
              </motion.div>
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
            localData={localData}
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
              localData={localData}
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
