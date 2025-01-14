import styles from "./Card.module.css";

function Card() {
    return (
        <div className={styles.card}>
            <img src="" alt="chef.jpg" />
            <div className={styles["card-header"]}>
                <h6>Chef Name</h6>
                <p>Designation</p>
            </div>
        </div>
    );
}

export default Card;