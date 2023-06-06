import { FC, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

import classes from "./largeCarousel.module.scss";
import { ActiveIndicatorStackSC } from "./largeCarousel.style";

interface LargeCarouselInterface {
  data: any[];
  activeIndex?: number;
  verticalOnly?: boolean;
  backHandler?: () => void;
  nextHandler?: () => void;
  itemIndex?: number;
}

const CarouselControl: FC<LargeCarouselInterface> = ({
  data,
  activeIndex,
  backHandler,
  nextHandler,
}) => {
  return (
    <>
      <div className={classes.control__container}>
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
        </ActiveIndicatorStackSC>
        <button onClick={nextHandler} className={classes.control__button}>
          <ArrowRight />
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
            return <>
              <span>{item}</span><br /><br />
            </>
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

const LargeCarousel: FC<LargeCarouselInterface> = ({
  data,
  verticalOnly = false,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const backHandler = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextHandler = () => {
    if (activeIndex < data.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <div className={classes.carousel}>
        <div className={classes.carousel__media}>
          {/* load all images here */}
          {data.map((item, index) => {
            return (
              <div
                key={`large-media-${index}`}
                className={classes.media__item}
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
          </div>
          <div className={classes.content__control}>
            <CarouselControl
              data={data}
              nextHandler={nextHandler}
              activeIndex={activeIndex}
              backHandler={backHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LargeCarousel;
