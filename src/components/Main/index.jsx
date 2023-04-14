import styles from './Main.module.css';

export default function Main({title, children}) {

    return (
        <main className={styles.mainContainer}>
            <h2>{title}</h2>
            {children}
        </main>
    )
}
