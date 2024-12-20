import Header from "../header/Header";
import Footer from "../footer/Footer";
import style from "./MainLayout.module.css";

function MainLayout({ children }) {
  return (
    <div className={style.layout}>
      <div className={style.page}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
