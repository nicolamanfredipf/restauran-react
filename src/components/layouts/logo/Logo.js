import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Logo.module.css";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  return (
    <div className={style.logo} onClick={() => {navigate("/")}}>
      <h1>Restauran</h1>
      <FontAwesomeIcon icon="fa-solid fa-utensils" size="2xl" />
    </div>
  );
}

export default Logo;
