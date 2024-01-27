import Image from "next/image";
import styles from "./singlePost.module.css";
const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/19415783/pexels-photo-19415783/free-photo-of-homme-costume-etre-assis-retro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>title</h1>
        <div className={styles.detail}>
          {" "}
          <Image
            src="https://images.pexels.com/photos/19862554/pexels-photo-19862554/free-photo-of-rue-fenetres-fenetre-telephone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            
            className={styles.avatar}
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>TErry jeferson </span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>23/01/2023 </span>
          </div>
        </div>
        <div className={styles.content}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ab corporis saepe itaque quae non omnis aperiam sapiente incidunt soluta optio, eveniet consectetur voluptates expedita sed reprehenderit quasi ullam tempora!
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
