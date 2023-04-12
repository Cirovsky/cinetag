import globalStyles from 'styles/globalStyles.module.css';
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={`${styles.footer} ${globalStyles.container}`}>
            Desenvolvido por alura
        </footer>
    )
}
