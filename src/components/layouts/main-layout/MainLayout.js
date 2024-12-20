import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./MainLayout.module.css";

function MainLayout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
