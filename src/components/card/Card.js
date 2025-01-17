import styles from "./Card.module.css";
import teamImage from "../../team-1.jpg"; 

function Card() {
    return (
        <div className={styles.card}>
            <img src={teamImage} alt="chef.jpg" />
            <div className={styles["card-header"]}>
                <h6>Chef Name</h6>
                <p>Designation</p>
            </div>
        </div>
    );
}

export default Card;