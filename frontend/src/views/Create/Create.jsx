/* eslint-disable react/react-in-jsx-scope */
import styles from './Create.module.css'
import Modal from "../../components/Modal/Modal";
import BasicDatePicker from "../../components/Datepicker/Datepicker";
import BasicSelect from "../../components/Select/Select";
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAddEmployeeMutation } from '../../features/employee/employeeApiEndpoints'
import statesList from '../../assets/statesList'
import { setEmployeeData } from '../../features/employee/employeeSlice'

const depart = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal']


export default function Create() {
    const dispatch = useDispatch()
    const [addEmployee] = useAddEmployeeMutation()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [startDate, setStartDate] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState('')

    const handleFirstNameInput = (e) => { setFirstName(e.target.value) }
    const handleLastNameInput = (e) => { setLastName(e.target.value) }
    const handleBirthDateInput = (e) => { setBirthDate(e.target.value) }
    const handleStartDateInput = (e) => { setStartDate(e.target.value) }
    const handleStreetInput = (e) => { setStreet(e.target.value) }
    const handleCityInput = (e) => { setCity(e.target.value) }
    const handleStateInput = (e) => { setState(e.target.value) }
    const handleZipCodeInput = (e) => { setZipCode(e.target.value) }
    const handleDepartmentInput = (e) => { setDepartment(e.target.value) }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try { 
            dispatch(setEmployeeData({ employeeFirstName:firstName, employeeLastName:lastName, /*employeeBirthDate:birthDate, 
                employeeStartDate:startDate,*/ employeeStreet:street, employeeCity:city, employeeState:state,
                employeeZipCode:zipCode, employeeDepartment:department
            }))
            addEmployee({firstName:firstName, lastName:lastName, birthDate:birthDate, 
                startDate:startDate, street:street, city:city, state:state,
                zipCode:zipCode, department:department})
            console.log('ok - employee created')
        } catch (err) {
            if (!err.status) {
               console.log('submit error') 
            }
        } 
    }

    
    return (
        <div >
            <div className={styles.main}>
                <h1>Create Employees</h1> 
                <form onSubmit={handleSubmit} id="create-employee" className={styles.form}>
                    <div className={styles.row}>
                    <div className={styles.empData}>
                        <div className={styles.input_wrapper}>
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" onChange={handleFirstNameInput} id="first-name" value={firstName} />
                        </div>
                        <div className={styles.input_wrapper}>
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" onChange={handleLastNameInput} id="last-name" value={lastName} />
                        </div>
                        <div className={styles.input_date_wrapper}>
                            <label htmlFor="date-of-birth">Date of Birth</label>
                            <BasicDatePicker onChange={handleBirthDateInput} id="date-of-birth" setter={setBirthDate}/>
                        </div>
                        <div className={styles.input_date_wrapper}>
                            <label htmlFor="start-date">Start Date</label>
                            <BasicDatePicker onChange={handleStartDateInput} setter={setStartDate}/>
                        </div>
                        <div className={styles.input_select_wrapper}>
                        <label htmlFor="department">Department</label>
                        {<BasicSelect onChange={handleDepartmentInput} labelVal="" setter={setDepartment} values={depart} required/>}
                    </div>
                    </div>
                    <fieldset className={styles.empData}>
                        <legend>Address</legend>

                        <div className={styles.input_wrapper}>
                            <label htmlFor="street">Street</label>
                            <input onChange={handleStreetInput} id="street" type="text" />
                        </div>
                        <div className={styles.input_wrapper}>
                            <label htmlFor="city">City</label>
                            <input onChange={handleCityInput} id="city" type="text" />
                        </div>
                        <div className={styles.input_select_wrapper}>
                        <label htmlFor="States">States</label>
                            {<BasicSelect onChange={handleStateInput} labelVal="" values={statesList} setter={setState}/>}
                        </div>
                        <div className={styles.input_wrapper}>
                            <label htmlFor="zip-code">Zip Code</label>
                            <input onChange={handleZipCodeInput} id="zip-code" type="number" />
                        </div>
                    </fieldset>
                    </div>
                    
                    <button className={styles.sub} type='submit' onClick={() => setIsModalOpen(true)} >Save</button>
                    
                </form>

                
                {
                    isModalOpen && 
                    <Modal setIsOpen={setIsModalOpen} >
                        Employee Created!
                    </Modal>   
                }
            </div>
        </div>      
    )
}