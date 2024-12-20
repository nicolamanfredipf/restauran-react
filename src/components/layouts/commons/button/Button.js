import style from "./Button.module.css";

function Button({ type, lable }) {
  return <button type={type} className={style.action}>{lable}</button>;
}

export default Button;
