import { configureStore } from "@reduxjs/toolkit"
import { hrnetApi } from "./services/hrnetApi"
import employeeDataReducer from '../features/employee/employeeSlice'

export const store = configureStore({
    reducer: {
        [hrnetApi.reducerPath]: hrnetApi.reducer,
        //auth: authReducer,
        employeeData: employeeDataReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(hrnetApi.middleware),
    devTools: true,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})