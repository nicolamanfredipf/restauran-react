import styles from "./ServiceCard.module.css";

function ServiceCard({ children, title, description }) {
    return (
        <div className={styles["service-card"]}>
            {children}
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
}

export default ServiceCard;