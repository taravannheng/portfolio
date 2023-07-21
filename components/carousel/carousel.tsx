import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  PlayCircleFilledOutlined,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Lottie from "react-lottie";

import classes from "./carousel.module.scss";
import { ActiveIndicatorStackSC } from "./carousel.style";
import Loader from "../loader/loader";
import imagePlaceholder from "../../data/image-placeholder.json";

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
  shakeControlButton?: boolean;
  localData?: any;
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
  setHoveredProjectIndex,
  shakeControlButton,
}) => {
  return (
    <>
      <div className={classes.carousel__control}>
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
          onClick={nextHandler}
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

const SummarySlide: FC<CarouselInterface> = ({
  data,
  verticalOnly,
  activeIndex,
  itemIndex,
  activeProjectIndex,
  hoveredProjectIndex,
}) => {
  const [imageAnimation, setImageAnimation] = useState(null);

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
    const fetchImageAnimation = async () => {
      const fetchedData = await fetchAnimation(data[itemIndex].imgUrl);
      const animationData = fetchedData ? fetchedData : imagePlaceholder;
      setImageAnimation(animationData);
    };

    if (activeIndex === itemIndex) {
      fetchImageAnimation();
    }

    if (activeProjectIndex !== hoveredProjectIndex) {
      setImageAnimation(null);
    }
  }, [data, itemIndex, activeIndex]);

  return (
    <>
      <motion.div
        initial={{ translateY: 0 }}
        animate={{ translateY: `-${activeIndex * 100}%` }}
        transition={{ duration: 0.1, type: "spring" }}
        className={`${classes.body__content} ${
          verticalOnly ? classes.vertical_only : ""
        }`}
      >
        <div
          style={{ backgroundColor: data[itemIndex].mediaBackgroundColor }}
          className={`${classes.content__media} ${
            imageAnimation ? "" : classes.shimmer
          }`}
        >
          {data[0].isFeatured && (
            <div className={classes.featured_chip}>
              <div className={classes.featured_chip__dot}></div>
              <span className={classes.featured_chip__text}>Featured</span>
            </div>
          )}
          <div className={classes.content__media_lottie_container}>
            <Lottie
              options={{
                loop: false,
                autoplay: true,
                animationData: imageAnimation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid meet",
                },
              }}
            />
          </div>
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
                <div key={`${data[itemIndex].id}-description-${index}`}>
                  <span>{item}</span>
                  <br />
                  <br />
                </div>
              );
            })}
          </p>
        </div>
      </motion.div>
    </>
  );
};

const FunctionalitySlide: FC<CarouselInterface> = ({
  data,
  verticalOnly,
  activeIndex,
  itemIndex,
  projects,
  activeProjectIndex,
  hoveredProjectIndex,
}) => {
  const [imageAnimation, setImageAnimation] = useState(null);

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
    const fetchImageAnimation = async () => {
      const fetchedData = await fetchAnimation(data[itemIndex].imgUrl);
      const animationData = fetchedData ? fetchedData : imagePlaceholder;
      setImageAnimation(animationData);
    };

    if (activeIndex === itemIndex) {
      fetchImageAnimation();
    }

    if (activeProjectIndex !== hoveredProjectIndex) {
      setImageAnimation(null);
    }
  }, [data, itemIndex, activeIndex]);

  return (
    <>
      <motion.div
        initial={{ translateY: 0 }}
        animate={{ translateY: `-${activeIndex * 100}%` }}
        transition={{ duration: 0.1, type: "spring" }}
        className={`${classes.body__content} ${
          verticalOnly ? classes.vertical_only : ""
        }`}
      >
        <div
          style={{ backgroundColor: data[itemIndex].mediaBackgroundColor }}
          className={`${classes.content__media} ${
            imageAnimation ? "" : classes.shimmer
          }`}
        >
          {data[0].isFeatured && (
            <div className={classes.featured_chip}>
              <div className={classes.featured_chip__dot}></div>
              <span className={classes.featured_chip__text}>Featured</span>
            </div>
          )}
          <div className={classes.content__media_lottie_container}>
            <Lottie
              options={{
                loop: false,
                autoplay: true,
                animationData: imageAnimation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid meet",
                },
              }}
            />
          </div>
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
      </motion.div>
    </>
  );
};

const TechnologySlide: FC<CarouselInterface> = ({
  data,
  verticalOnly,
  activeIndex,
  itemIndex,
  projects,
  activeProjectIndex,
  hoveredProjectIndex,
}) => {
  const [imageAnimation, setImageAnimation] = useState(null);

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
    const fetchImageAnimation = async () => {
      const fetchedData = await fetchAnimation(data[itemIndex].imgUrl);
      const animationData = fetchedData ? fetchedData : imagePlaceholder;
      setImageAnimation(animationData);
    };

    if (activeIndex === itemIndex) {
      fetchImageAnimation();
    }

    if (activeProjectIndex !== hoveredProjectIndex) {
      setImageAnimation(null);
    }
  }, [data, itemIndex, activeIndex]);

  return (
    <>
      <motion.div
        initial={{ translateY: 0 }}
        animate={{ translateY: `-${activeIndex * 100}%` }}
        transition={{ duration: 0.1, type: "spring" }}
        className={`${classes.body__content} ${
          verticalOnly ? classes.vertical_only : ""
        }`}
      >
        <div
          style={{ backgroundColor: data[itemIndex].mediaBackgroundColor }}
          className={`${classes.content__media} ${
            imageAnimation ? "" : classes.shimmer
          }`}
        >
          {data[0].isFeatured && (
            <div className={classes.featured_chip}>
              <div className={classes.featured_chip__dot}></div>
              <span className={classes.featured_chip__text}>Featured</span>
            </div>
          )}
          <div className={classes.content__media_lottie_container}>
            <Lottie
              options={{
                loop: false,
                autoplay: true,
                animationData: imageAnimation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid meet",
                },
              }}
            />
          </div>
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
      </motion.div>
    </>
  );
};

const SocialSlide: FC<CarouselInterface> = ({
  data,
  verticalOnly,
  activeIndex,
  itemIndex,
  projects,
  activeProjectIndex,
  hoveredProjectIndex,
}) => {
  const [imageAnimation, setImageAnimation] = useState(null);

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
    const fetchImageAnimation = async () => {
      const fetchedData = await fetchAnimation(data[itemIndex].imgUrl);
      const animationData = fetchedData ? fetchedData : imagePlaceholder;
      setImageAnimation(animationData);
    };

    if (activeIndex === itemIndex) {
      fetchImageAnimation();
    }

    if (activeProjectIndex !== hoveredProjectIndex) {
      setImageAnimation(null);
    }
  }, [data, itemIndex, activeIndex]);

  return (
    <>
      <motion.div
        initial={{ translateY: 0 }}
        animate={{ translateY: `-${activeIndex * 100}%` }}
        transition={{ duration: 0.1, type: "spring" }}
        className={`${classes.body__content} ${
          verticalOnly ? classes.vertical_only : ""
        }`}
      >
        <div
          style={{ backgroundColor: data[itemIndex].mediaBackgroundColor }}
          className={`${classes.content__media} ${
            imageAnimation ? "" : classes.shimmer
          }`}
        >
          {data[0].isFeatured && (
            <div className={classes.featured_chip}>
              <div className={classes.featured_chip__dot}></div>
              <span className={classes.featured_chip__text}>Featured</span>
            </div>
          )}
          <div className={classes.content__media_lottie_container}>
            <Lottie
              options={{
                loop: false,
                autoplay: true,
                animationData: imageAnimation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid meet",
                },
              }}
            />
          </div>
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
      </motion.div>
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
  localData,
}) => {
  const [logoData, setLogoData] = useState(null);
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
    const fetchLogos = async () => {
      const dataPromises = projects.map((project, index) =>
        fetchAnimation(project.imgUrl)
      );
      const fetchedData = await Promise.all(dataPromises);
      const data = fetchedData.map((item, index) => {
        return item ? item : localData.imagePlaceholder;
      });

      setLogoData(data);
    };

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

    fetchLogos();
    fetchPreviews();
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
        className={`${classes.body__content} ${classes.all_projects}`}
      >
        <h2 className={classes.all_projects__title}>More Projects</h2>
        <div className={classes.all_projects__list_container}>
          <ul className={classes.all_projects__list}>
            {projects &&
              projects.map((project, index) => {
                return (
                  <>
                    {previewData && logoData && (
                      <li
                        key={`project-${project.id}-${index}`}
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
                        {isProjectSelected && hoveredProjectIndex === index ? (
                          <Lottie
                            options={{
                              loop: false,
                              autoplay: true,
                              animationData: previewData[index],
                              rendererSettings: {
                                preserveAspectRatio: "xMidYMid slice",
                              },
                            }}
                          />
                        ) : (
                          <Lottie
                            options={{
                              loop: true,
                              autoplay: true,
                              animationData: logoData[index],
                              rendererSettings: {
                                preserveAspectRatio: "xMidYMid slice",
                              },
                            }}
                          />
                        )}
                      </li>
                    )}
                  </>
                );
              })}
          </ul>
        </div>
        <p className={classes.all_projects__select_text}>
          {hoveredProjectIndex !== null ? (
            <span>{projects[hoveredProjectIndex].shortDescription}</span>
          ) : (
            <span>Select a project</span>
          )}
        </p>
      </motion.div>
    </>
  );
};

const Carousel: FC<CarouselInterface> = ({
  data,
  verticalOnly = false,
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
        <div className={classes.carousel__body}>
          {data.map((item, index) => {
            if (item.type === "summary") {
              return (
                <SummarySlide
                  key={`slide-${projects[activeProjectIndex]}-${index}`}
                  itemIndex={index}
                  activeIndex={activeIndex}
                  data={data}
                  verticalOnly
                  projects={projects}
                  activeProjectIndex={activeProjectIndex}
                  hoveredProjectIndex={hoveredProjectIndex}
                />
              );
            }

            if (item.type === "functionality") {
              return (
                <FunctionalitySlide
                  key={`slide-${projects[activeProjectIndex]}-${index}`}
                  itemIndex={index}
                  activeIndex={activeIndex}
                  data={data}
                  verticalOnly
                  projects={projects}
                  activeProjectIndex={activeProjectIndex}
                  hoveredProjectIndex={hoveredProjectIndex}
                />
              );
            }

            if (item.type === "technology") {
              return (
                <TechnologySlide
                  key={`slide-${projects[activeProjectIndex]}-${index}`}
                  itemIndex={index}
                  activeIndex={activeIndex}
                  data={data}
                  verticalOnly
                  projects={projects}
                  activeProjectIndex={activeProjectIndex}
                  hoveredProjectIndex={hoveredProjectIndex}
                />
              );
            }

            if (item.type === "socials") {
              return (
                <SocialSlide
                  key={`slide-${projects[activeProjectIndex]}-${index}`}
                  itemIndex={index}
                  activeIndex={activeIndex}
                  data={data}
                  verticalOnly
                  projects={projects}
                  activeProjectIndex={activeProjectIndex}
                  hoveredProjectIndex={hoveredProjectIndex}
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
              localData={localData}
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
          shakeControlButton={shakeControlButton}
        />
      </div>
    </>
  );
};

export default Carousel;
