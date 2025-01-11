import styles from './Title.module.css';

function Title({ name }) {
    return (
        <>
            <div >
                <h3 className={styles.titleSection}>{name}</h3>
            </div>
        </>
    );
}

export default Title;