import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    /*credentials: 'include',*///--->cros origin error => modif server : 'Access-Control-Allow-Origin' should not be '*' but exact origin!!
    /*prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token != null) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }*/
})

export const hrnetApi = createApi({
    baseQuery: baseQuery,
    endpoints: builder => ({})
})