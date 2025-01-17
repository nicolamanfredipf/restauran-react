import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Layout.module.css";

function Layout({ children }) {
    return (
        <>
            <Header />
            <div className={styles.page}>
                <main className={styles.main}>{children}</main>
                <Footer />
            </div>
        </>
    );
}

export default Layout;