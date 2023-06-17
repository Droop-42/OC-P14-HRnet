import styles from './Footer.module.css'

export default function Footer () {
    return (
        <div>
            <footer className={styles.footer}>
            <p className={styles.footer_text}>Copyright 2023 HRnet</p>
            </footer>
        </div>
    )
}