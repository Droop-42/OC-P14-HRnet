/* eslint-disable react/react-in-jsx-scope */
import styles from './Current.module.css'
//import Table from '../../components/Table/Table'
import DataGrid from '../../components/DataGrid/DataGrid'


export default function User() {
    
    return (
        <div className={styles.main}>
            <div id="employee-div" >
                <h1>Current Employees</h1>
                {/*<Table className={styles.table}/>*/}
                <DataGrid />              
            </div>
        </div>      
    )
}
