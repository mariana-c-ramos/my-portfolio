import styles from './about.module.css';
import { getImageURL } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}>
        <img className={styles.aboutImg} src={getImageURL("about/aboutImage.png")} alt="me sitting with a laptop" />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>Experience in building responsive and optimized digital solutions, such as landing pages, newsletters and gamified HTML solutions.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Design</h3>
              <p>Creation of simple digital content, such as banners and icons.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/uiIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Ux Designer</h3>
              <p>Design of small landings pages, aswell as wireframes and UX stage.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
