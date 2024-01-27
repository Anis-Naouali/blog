import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Anis Naouali</div>
      <div className={styles.text}>
        Anis Naouali's portfolio © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;