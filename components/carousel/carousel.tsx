import { FC, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

import classes from "./carousel.module.scss";
import { ActiveIndicatorStackSC } from "./carousel.style";

interface CarouselInterface {
  data: any[];
  activeIndex?: number;
  verticalOnly?: boolean;
  backHandler?: () => void;
  nextHandler?: () => void;
  itemIndex?: number;
}

const CarouselControl: FC<CarouselInterface> = ({
  data,
  activeIndex,
  backHandler,
  nextHandler,
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
        </ActiveIndicatorStackSC>
        <button onClick={nextHandler} className={classes.control__button}>
          <ArrowRight />
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
        <div className={classes.content__media}>
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
            {data[itemIndex].description}
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
        <div className={classes.content__media}>
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
                {item.text}
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
        <div className={classes.content__media}>
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
                {item.text}
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
        <div className={classes.content__media}>
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
                {item.text}
              </a>
            );
          })}
        </div>
        </div>
      </div>
    </>
  );
};

const Carousel: FC<CarouselInterface> = ({ data, verticalOnly = false }) => {
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
        <div className={classes.carousel__body}>
          {data.map((item, index) => {
            if (item.type === "summary") {
              return (
                <SummarySlide key={`slide-${index}`} itemIndex={index} activeIndex={activeIndex} data={data} verticalOnly />
              );
            }

            if (item.type === "functionality") {
              return (
                <FunctionalitySlide key={`slide-${index}`} itemIndex={index} activeIndex={activeIndex} data={data} verticalOnly />
              );
            }

            if (item.type === "technology") {
              return (
                <TechnologySlide key={`slide-${index}`} itemIndex={index} activeIndex={activeIndex} data={data} verticalOnly />
              );
            }

            if (item.type === "socials") {
              return (
                <SocialSlide key={`slide-${index}`} itemIndex={index} activeIndex={activeIndex} data={data} verticalOnly />
              );
            }
          })}
        </div>
        <CarouselControl
          data={data}
          activeIndex={activeIndex}
          backHandler={backHandler}
          nextHandler={nextHandler}
        />
      </div>
    </>
  );
};

export default Carousel;
