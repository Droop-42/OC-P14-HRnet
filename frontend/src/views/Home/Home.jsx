/* eslint-disable react/react-in-jsx-scope */
import styles from './Home.module.css'
import Modal from "../../components/Modal/Modal";
import React, { useState } from "react";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <div >
            <div className={styles.main}>
                <h1>Create Employees</h1> 
                <form action="#" id="create-employee" className={styles.form}>
                    <div className={styles.row}>
                    <div className={styles.empData}>
                        <div className={styles.input_wrapper}>
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" />
                        </div>
                        <div className={styles.input_wrapper}>
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" />
                        </div>
                        <div className={styles.input_wrapper}>
                            <label htmlFor="date-of-birth">Date of Birth</label>
                            <input id="date-of-birth" type="text" />
                        </div>
                        <div className={styles.input_wrapper}>
                            <label htmlFor="start-date">Start Date</label>
                            <input id="start-date" type="text" />
                        </div>
                    </div>
                    <fieldset className={styles.empData}>
                        <legend>Address</legend>

                        <div className={styles.input_wrapper}>
                            <label htmlFor="street">Street</label>
                            <input id="street" type="text" />
                        </div>
                        <div className={styles.input_wrapper}>
                            <label htmlFor="city">City</label>
                            <input id="city" type="text" />
                        </div>
                        <div className={styles.input_wrapper}>
                            <label htmlFor="state">State</label>
                            <select name="state" id="state"></select>
                        </div>
                        <div className={styles.input_wrapper}>
                            <label htmlFor="zip-code">Zip Code</label>
                            <input id="zip-code" type="number" />
                        </div>
                    </fieldset>
                    </div>
                    

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </form>

                <button onClick={() => setIsModalOpen(true)}>Save</button>
                {isModalOpen && <Modal setIsOpen={setIsModalOpen} />}
            </div>
        </div>      
    )
}