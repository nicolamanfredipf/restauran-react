import SectionTitle from "../section-title/SectionTitle";
import styles from "./Section.module.css";

function Section({ children, sectionTitle, sectionSubtitle }) {
    return (
        <section className={styles.section}>
            <SectionTitle title={sectionTitle} />
            <h2>{sectionSubtitle}</h2>
            {children}
        </section>
    );
}

export default Section;