import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>JJ</div>
      <div className={styles.text}>
        Jason James Bell © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
