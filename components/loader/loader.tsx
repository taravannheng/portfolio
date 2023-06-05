import Image from "next/image";
import classes from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={classes.loader}>
      {/* <h1 className={classes.loader__text}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </h1> */}
      <Image
        loading="eager"
        src="/images/logos/logo-personal.svg"
        width={120}
        height={120}
        alt="animated logo"
      />
    </div>
  );
};

export default Loader;
