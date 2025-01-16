import styles from "./MenuItem.module.css";

function MenuItem({
  dishName = "Pizza",
  dishPrice = "10$",
  dishDescription = "Lorem ipsum",
  dishAlt = "dish.jpg",
  dishSrc,
}) {
  return (
    <li className={styles["menu-item"]}>
      <img src={dishSrc} alt={dishAlt} />
      <div className={styles["menu-item-body"]}>
        <div>
          <h4>{dishName}</h4>
          <h3>{dishPrice}</h3>
        </div>
        <p>{dishDescription}</p>
      </div>
    </li>
  );
}

export default MenuItem;
