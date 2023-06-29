/* eslint-disable react/react-in-jsx-scope */
import styles from './Home.module.css'
import Modal from "../../components/Modal/Modal";
import BasicDatePicker from "../../components/Datepicker/Datepicker";
import BasicSelect from "../../components/Select/Select";
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetEmployeeMutation } from '../../features/employee/employeeApiEndpoints'
import { setUserName, selectCurrentFirstName, selectCurrentLastName } from '../../features/employee/employeeSlice'


export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch()
    const [getEmployee, { isLoading, isSuccess }] = useGetEmployeeMutation()

    console.log(getEmployee)

    useEffect(() => {
        getEmployee()
            .unwrap()
            .then(payload => {
                // const profileData = { ...data }
                //dispatch(setUserName({ userFirstName: payload.body.firstName, userLastName: payload.body.lastName }))
                //setFirstName(payload.body.firstName)
                //setLastName(payload.body.lastName)
                console.log(payload)
            })
            .catch(error => console.error(error.data.error || 'Unexpected error'))
    }, [])
    
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
                        <div className={styles.input_date_wrapper}>
                            <label htmlFor="date-of-birth">Date of Birth</label>
                            <BasicDatePicker />
                        </div>
                        <div className={styles.input_date_wrapper}>
                            <label htmlFor="start-date">Start Date</label>
                            <BasicDatePicker />
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
                        <div className={styles.input_select_wrapper}>
                            <BasicSelect />
                        </div>
                        <div className={styles.input_wrapper}>
                            <label htmlFor="zip-code">Zip Code</label>
                            <input id="zip-code" type="number" />
                        </div>
                    </fieldset>
                    </div>
                    
                    <div className={styles.input_select_wrapper}>
                        <label htmlFor="department">Department</label>
                        <BasicSelect />
                        {/*<select name="department" id="department">
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>*/}
                    </div>
                    
                </form>

                <button onClick={() => setIsModalOpen(true)}>Save</button>
                {isModalOpen && <Modal setIsOpen={setIsModalOpen} />}
            </div>
        </div>      
    )
}