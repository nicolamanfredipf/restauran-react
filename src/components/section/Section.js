import SectionTitle from "../section-title/SectionTitle";
import styles from "./Section.module.css";

function Section({ children, sectionTitle, sectionSubtitle }) {
  return (
    <section className={styles.section}>
      <div className={styles["section-header"]}>
        <SectionTitle title={sectionTitle} />
        <h2>{sectionSubtitle}</h2>
      </div>
      {children}
    </section>
  );
}

export default Section;
