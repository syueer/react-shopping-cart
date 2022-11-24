import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes["main-footer"]}>
      <div className={classes.container}>
        <div className={classes.row}>
          {/* Column1 */}
          <div className={classes.col}>
            <h4>Tee Shop</h4>
          </div>
          {/* Column2 */}
          <div className={classes.col}>
            <h4>Subscribe</h4>
          </div>
          {/* Column3 */}
          <div className={classes.col}>
            <h4>Where to find us?</h4>
          </div>
        </div>
        <hr />
        <div className={classes.row}>
          <p className={classes.text}>@2022 Yinmu | Github | Linkedin</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
