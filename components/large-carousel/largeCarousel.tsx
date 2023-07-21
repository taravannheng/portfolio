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
import imagePlaceholder from "../../data/image-placeholder.json";
import { fetchAnimation } from "../../utils/helpers";

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
              isClickToPauseDisabled
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
                    className={`${classes.all_projects__list_item} ${
                      isProjectSelected ? "" : classes.shimmer
                    }`}
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
  const [imageAnimation, setImageAnimation] = useState([]);

  useEffect(() => {
    const imageAnimationSS = sessionStorage.getItem(
      `animation-${projects[activeProjectIndex].id}`
    );

    if (imageAnimationSS) {
      setImageAnimation(JSON.parse(imageAnimationSS));
    }
  }, []);

  useEffect(() => {
    const fetchImageAnimation = async () => {
      const fetchedData = await fetchAnimation(data[activeIndex].imgUrl);
      const animationData = fetchedData ? fetchedData : imagePlaceholder;
      if (imageAnimation.length === 0) {
        setImageAnimation([animationData]);
        sessionStorage.setItem(
          `animation-${projects[activeProjectIndex].id}`,
          JSON.stringify(animationData)
        );
      } else {
        setImageAnimation((prevData) => [...prevData, animationData]);
        sessionStorage.setItem(
          `animation-${projects[activeProjectIndex].id}`,
          JSON.stringify([...imageAnimation, animationData])
        );
      }
    };

    if (activeIndex < data.length && imageAnimation.length === activeIndex) {
      fetchImageAnimation();
    }
  }, [activeIndex, data, activeProjectIndex, projects, imageAnimation]);

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
      setImageAnimation([]);

      //reset project session storage
      projects.map((project, index) => {
        sessionStorage.removeItem(`animation-${project.id}`);
      });
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
                className={`${classes.media__item} ${
                  imageAnimation.length <= activeIndex ? classes.shimmer : ""
                }`}
                initial={{ translateY: 0 }}
                animate={{ translateY: `-${activeIndex * 100}%` }}
                transition={{ duration: 0.1, type: "spring" }}
                style={
                  activeIndex < data.length && {
                    backgroundColor: `${
                      imageAnimation[activeIndex] !== imagePlaceholder
                        ? data[activeIndex].mediaBackgroundColor
                        : "#E0E0E0"
                    }`,
                  }
                }
              >
                {" "}
                {/* animate here */}
                {imageAnimation && (
                  <Lottie
                    options={{
                      loop: false,
                      autoplay: true,
                      animationData: imageAnimation[activeIndex],
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid meet",
                      },
                    }}
                  />
                )}
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
