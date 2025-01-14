import styles from "./SectionTitle.module.css";

function SectionTitle({title}){
    return(
        <h4 className={styles["section-title"]}>{title}</h4>
    );
}

export default SectionTitle;