import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }
  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];
const DataTable = ({data}) => {
  return (
        // <TableContainer component={Paper}>
        <Table className='border-1 border-blue-200'>
          <TableHead>
            <TableRow className='bg-blue-200'>
              <TableCell className='font-bold'>Assest Name</TableCell>
              <TableCell className='font-bold' align="right">Health Status</TableCell>
              <TableCell className='font-bold' align="right">Co2e</TableCell>
              <TableCell className='font-bold' align="right"><img width={"30px"} src="https://cdn-icons-png.flaticon.com/512/8100/8100464.png" alt="" /></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, id) => (
              <TableRow
                key={id}
              >
                <TableCell component="th" scope="row">
                  {row.assetName}
                </TableCell>
                <TableCell align="right">{row.HealthStatus}</TableCell>
                <TableCell align="right">{row.Co2e}</TableCell>
                <TableCell align="right">{row.total}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      )  
}

export default DataTable