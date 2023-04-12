import React from 'react';
import styles from './Main.module.css';

export default function Main({title}) {
    return (
        <main className={styles.mainContainer}>
            <h2>{title}</h2>
        </main>
    )
}
