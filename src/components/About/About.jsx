import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/developer.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                B.S Computer Science graduate from Kean University
                May 2024
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Career Interest</h3>
              <p>
              As I continue my educational journey to develop and refine my skills, 
              I am actively seeking a Software Development position where I can apply 
              my expertise and contribute to a company's goals. Through creating multiple 
              landing pages for various clients, I have gained valuable experience in both 
              technical skills and communication.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
