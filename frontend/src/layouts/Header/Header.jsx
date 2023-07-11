import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";


export default function Header () {
    const location = useLocation();
    const { pathname } = location;

    return (
        <div className={styles.header}>
             <h2>HRnet {'>'} Employees</h2>
            <nav className={styles.nav}>
            
                <Link  to="/create" className={pathname.split("/")[1] === "create" ? styles.link_active : styles.link}>
                    <span>Create</span> 
                </Link>
                <Link  to="/current" className={pathname.split("/")[1] === "current" ? styles.link_active : styles.link}>
                    <span>Current</span>
                </Link>
            </nav>
        </div>
    )
}