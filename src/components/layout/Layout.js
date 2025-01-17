import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Layout.module.css";
import PageHeader from "../../components/page-header/PageHeader";
import { useLocation } from "react-router-dom";

function Layout({ children }) {

    const location = useLocation();
    const currentPath = location.pathname.replace("/", "");


    return (
        <>
            <Header />
            <div className={styles.page}>
                {currentPath !== "" && <PageHeader title={currentPath} />}
                <main className={styles.main}>{children}</main>
                <Footer />
            </div>
        </>
    );
}

export default Layout;