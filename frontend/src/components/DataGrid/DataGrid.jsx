//import * as React from 'react';
import { useCallback, useMemo, useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import moment from "moment";

import { useGetEmployeeMutation } from '../../features/employee/employeeApiEndpoints'

const columns = [
  //{ field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 120 },
  { field: 'lastName', headerName: 'Last Name', width: 120 },
  { field: 'birthDate', headerName: 'Date of Birth', width: 120,  
    renderCell: (params) => {
      if (!params.value) {
        return ''
      } else {
      return moment(params.value).utc().format('DD/MM/YYYY');
    }},
  },
  { field: 'startDate', headerName: 'Start Date', width: 120, 
    renderCell: (params) => {
      if (!params.value) {
        return ''
      } else {
      return moment(params.value).utc().format('DD/MM/YYYY');
    }},
  },
  { field: 'street', headerName: 'Street', width: 120 },
  { field: 'city', headerName: 'City', width: 120 },
  { field: 'state', headerName: 'State', width: 120 },
  { field: 'zipCode', headerName: 'Zip Code', width: 120 },
  { field: 'department', headerName: 'Department', width: 120 },

];


export default function DataTable() {
  const [getEmployee, { isLoading, isSuccess }] = useGetEmployeeMutation()
  const [rows, setRows] = useState([]);

  // use mock data for speed test
  /*useEffect(() => {
    setRows([{"_id":"6499ff427ae74995d6c5a30f","firstName":"Tony","lastName":"Stark","birthDate":"2002-12-09T00:00:00.000Z","startDate":"2002-12-09T00:00:00.000Z","street":"De la lune","city":"New York","zipCode":55785,"department":"Sales","__v":0},
      {"_id":"6499ff427ae74995","firstName":"Toto","lastName":"loubeck","birthDate":"2002-12-09T00:00:00.000Z","startDate":"2002-12-09T00:00:00.000Z","street":"De la lune","city":"New York","zipCode":55785,"department":"Sales","__v":0}
    ])
  }, [])*/

  useEffect(() => {
      getEmployee()
          .unwrap()
          .then(payload => {
            console.log('payload', payload)
              setRows(payload) 
          })
          .catch(error => console.error(error.data.error || 'Unexpected error'))
  }, [])

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        getRowId={(row) => row._id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        //checkboxSelection
      />
    </div>
  );
}