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
          <p className={classes.body__description_functionality}>
            {data[itemIndex].description}
          </p>
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

            if (item.type === "functionalities") {
              return (
                <FunctionalitySlide key={`slide-${index}`} itemIndex={index} activeIndex={activeIndex} data={data} verticalOnly />
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
