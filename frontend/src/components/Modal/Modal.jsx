import React from "react";
import styles from "./Modal.module.css";
import closeIcon from './close.svg';

const Modal = ({ setIsOpen, children }) => {
  return (
    <>
      <div className={styles.backGr} onClick={() => setIsOpen(false)} />
      <div className={styles.modal}>
          <img src ={closeIcon} className={styles.closeBtn} alt="close btn" onClick={() => setIsOpen(false)}/>
          <div className={styles.modalContent}>
            {children}
          </div>
      </div>
    </>
  );
};

export default Modal;