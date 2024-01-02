import styles from './hero.module.css';
import { getImageURL } from "../../utils";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Mariana</h1>
        <p className={styles.description}>I&apos;m a Frontend Developer and I have been creating <strong className={styles.span}>lading pages</strong> and <strong className={styles.span}>gamified HTML5</strong> solutions. I work with JavaScript and jQuery. Reach out if you would like to know more.</p>
        <div className={styles.contactBtns}>
          <a className={styles.contactBtn} href="#contact">Let&apos;s talk</a>
          <a className={styles.contactBtn} href="">Download CV</a>
        </div>
      </div>
      <img className={styles.heroImg} src={getImageURL("hero/heroImage.png")} alt="hero image" />
      {/* hero image from pngtree.com */} 
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}
