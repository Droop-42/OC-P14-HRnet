import React from "react";
import styles from "./Modal.module.css";
//import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>
                X
              </button>
            </div>
            <div className={styles.modalContent}>
                Employee Created!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;