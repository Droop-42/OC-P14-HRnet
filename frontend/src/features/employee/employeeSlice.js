import { createSlice } from "@reduxjs/toolkit"

const employeeSlice = createSlice({
    name: 'employeeData',
    initialState: { firstName: null, lastName: null },
    reducers: {
        setEmployeeData: (state, action) => {
            const { employeeFirstName, employeeLastName, /*employeeBirthDate, 
                    employeeStartDate,*/ employeeStreet, employeeCity, employeeState,
                    employeeZipCode, employeeDepartment
                } = action.payload
            state.firstName = employeeFirstName
            state.lastName = employeeLastName
            //state.birthDate = employeeBirthDate
            //state.startDate = employeeStartDate
            state.street = employeeStreet
            state.city = employeeCity
            state.state = employeeState
            state.zipCode = employeeZipCode
            state.department = employeeDepartment
        },
        getEmployeeData: (state, action) => {
            const { employeeDataList } = action.payload
            state.dataList = employeeDataList
        }
    }
})

export const { setEmployeeData} = employeeSlice.actions
export default employeeSlice.reducer

export const selectCurrentFirstName = (state) => state.employeeData.firstName
export const selectCurrentLastName = (state) => state.employeeData.lastName