import { Fragment } from "react";
import bannerImg from "../../assets/banner.png";
import classes from "./Banner.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Banner = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Tee Shop</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={bannerImg} alt="Clothes" />
      </div>
    </Fragment>
  );
};

export default Banner;
