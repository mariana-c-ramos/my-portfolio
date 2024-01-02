import styles from './hero.module.css';
import { getImageURL } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faComments } from "@fortawesome/free-solid-svg-icons"


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Mariana</h1>
        <p className={styles.description}>I&apos;m a Frontend Developer and I create <strong className={styles.span}>Landing Pages</strong> and <strong className={styles.span}>Gamified HTML</strong> solutions. I work with React, JavaScript and jQuery, but I also</p>
        <p className={styles.description}>Reach out if you would like to know more or work with me!</p>
        <div className={styles.contactBtns}>
          <a className={styles.contactBtn} href="#contact">Let&apos;s talk <FontAwesomeIcon icon={faComments} /></a>
          <a className={styles.contactBtn} href="../../assets/cv-marianaramos.pdf" download>Download CV <FontAwesomeIcon icon={faDownload} /></a>
        </div>
      </div>
      <img className={styles.heroImg} src={getImageURL("hero/heroImage.png")} alt="hero image" />
      {/* hero image from pngtree.com */} 
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}
