import { Route, Routes } from "react-router-dom";
import style from "./Layout.module.scss";
import Home from "../pages/Home";
function Layout() {
  return (
    <main className={style.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </main>
  );
}

export default Layout;
