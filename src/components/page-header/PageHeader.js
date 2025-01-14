import styles from "./PageHeader.module.css";

function PageHeader({title}){
    const menuName = 'About';


    return(
        <div className={styles["page-header-container"]}>
            <h1>{title}</h1>
            <p>{menuName.toUpperCase()}</p>
        </div>
    )
}

export default PageHeader;