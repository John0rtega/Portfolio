import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          {/* Update email link with mailto: */}
          <a href="mailto:johnortega830@gmail.com">johnortega830@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          {/* Ensure LinkedIn link opens in a new tab */}
          <a 
            href="https://www.linkedin.com/in/john-ortega830/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/JohnOrtega
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          {/* Ensure GitHub link opens in a new tab */}
          <a 
            href="https://github.com/John0rtega"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/JohnOrtega
          </a>
        </li>
      </ul>
    </footer>
  );
};
