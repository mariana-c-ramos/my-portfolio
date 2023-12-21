import { useState } from 'react';
import styles from './hero.module.css';
import { getImageURL } from "../../utils";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Mariana</h1>
        <p className={styles.description}>I&apos;m a frontend developer with almost 2y of experience using JavaScript and jQuery. Reach out if you would like to know more.</p>
        <a className={styles.contactBtn} href="mailto:mary.programms@gmail.com">Contact me</a>
      </div>
      <img className={styles.heroImg} src={getImageURL("hero/heroImage.png")} alt="hero image" />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}
