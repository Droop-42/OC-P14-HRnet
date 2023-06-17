/* eslint-disable react/react-in-jsx-scope */
import styles from './Accordion.module.css';
import logo_down from '../../assets/expand_more_FILL0_wght400_GRAD0_opsz40.svg';
import logo_up from '../../assets/expand_less_FILL0_wght400_GRAD0_opsz40.svg';
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export default function Accordion({ Titre, children, openState }) {
    const [isOpen, setIsOpen] = useState(openState)

    return <div className={styles.accordion}>
            <div className={styles.title}>
                <span className={styles.txtTitle}>
                    {Titre}                
                </span>
                <img src={isOpen ? logo_up : logo_down} alt="Logo" onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen )}/>            
            </div> 
            {isOpen && <div className={styles.expand}>
                {children}
            </div> }
              
        </div>     
}