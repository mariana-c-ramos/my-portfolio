import styles from "./Contact.module.css";
import { getImageURL } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contacts</h2>
        <p>Let&apos;s talk!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageURL("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:mary.programms@gmail.com" rel="noreferrer" target="_blank">mary.programms@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageURL("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/mariana-c-ramos/" rel="noreferrer" target="_blank">linkedin.com/mariana-c-ramos</a>
        </li>
        <li className={styles.link}>
          <img src={getImageURL("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/mariana-c-ramos" rel="noreferrer" target="_blank">github.com/mariana-c-ramos</a>
        </li>
      </ul>
    </footer>
  );
};
