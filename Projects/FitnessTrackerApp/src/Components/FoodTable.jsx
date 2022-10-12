import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name = "",
  amount = 0,
  calories = 0,
  protein = 0
) {
  return { name, amount, calories, protein };
}

const rows = [
  createData('Greek Yogurt', "1 cup", 159, 16.0),
  createData('Chicken', "*", 237, 9.0,),
  createData('Pasta', "*", 262, 16.0,),
  createData('Eggs', "*", 305, 3.7,),
  createData('Protein shake', "*", 356, 16.0),
];

export default function FoodTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Food</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Protein</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
