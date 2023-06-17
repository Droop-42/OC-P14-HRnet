/* eslint-disable react/react-in-jsx-scope */
import styles from './User.module.css'
import Table from '../../components/Table/Table'


export default function User() {
    
    return (
        <div className={styles.main}>
            <div id="employee-div" >
                <h1>Current Employees</h1>
                <Table />
                
            </div>
        </div>      
    )
}
