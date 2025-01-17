import styles from "./MenuNavItem.module.css";

function MenuNavItem({ children, lable, title }) {
  return (
    <li className={styles["nav-menu-item"]}>
      {children}
      <div>
        <p>{lable}</p>
        <h4>{title}</h4>
      </div>
    </li>
  );
}

export default MenuNavItem;
