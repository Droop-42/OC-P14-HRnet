import { hrnetApi } from "../../app/services/hrnetApi";

export const employeeApiEndpoints = hrnetApi.injectEndpoints({
    endpoints: builder => ({
        editEmployee: builder.mutation({
            query: employeeData => ({
                url: 'api/employee',
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: { ...employeeData },
            })
        }),
        addEmployee: builder.mutation({
            query: employeeData => ({
                url: 'api/employee',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: { ...employeeData },
            })
        }),
        getEmployee: builder.mutation({
            query: () => ({
                url: 'api/employee',
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
            })
        }),
        deleteEmployee: builder.mutation({
            query: employeeData => ({
                url: 'api/employee',
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: { ...employeeData.id },
            })
        }),
    })
})

export const { useGetEmployeeMutation } = employeeApiEndpoints