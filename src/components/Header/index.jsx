import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import globalStyles from 'styles/globalStyles.module.css';
import styles from './Header.module.css'
import logo from 'assets/imagens/logo.png'


export default function Header() {

    const location = useLocation();

    return (
        <header className={globalStyles.container}>
           <h1>
                <img src={logo} alt='logomarca branca com bandeirola junina com estilo de fita de filme'/>
           </h1>
           <nav className={styles.navBar}>
                <Link to={'/'}>Home</Link>
                <Link to= {'/favoritos'}>Favoritos</Link>
           </nav>
        </header>
    )
}
