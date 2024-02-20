import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>Lorem ipsum dolor sit</h2>
        <h1 className={styles.title}>
        Quisque vel nulla sit amet nunc posuere eleifend ut non arcu.         </h1>
        <p className={styles.desc}>
          Integer consectetur est et nisi tempus, in suscipit justo congue.
          Suspendisse potenti. Fusce ac urna vel neque tincidunt cursus eget vel
          libero. Sed vitae elit vitae ligula cursus malesuada. Mauris eu odio
          eu nisl finibus accumsan.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
