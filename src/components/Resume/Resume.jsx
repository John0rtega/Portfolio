import React from "react";
import styles from "./Resume.module.css"; 

export const Resume = () => {
  return (
    <section id="resume" className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Resume</h2>
        <p className={styles.description}>You can view or download my resume below.</p>
        <embed
          src="./Resume/my-resume.pdf" 
          type="application/pdf"
          className={styles.pdfEmbed}
        />
        <a href="./Resume/my-resume.pdf" download className={styles.downloadBtn}>
          Download Resume
        </a>
      </div>
    </section>
  );
};
