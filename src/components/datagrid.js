import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  
  {
    field: 'price',
    headerName: 'Price AUD',
    width: 150,
    
  },
  {
    field: 'qty',
    headerName: 'Quantity',
    width: 110,
    
  },
  {
    field: 'exp',
    headerName: 'Expiration',
    type: 'number',
    width: 150,
    
  },
  {
    field: 'from',
    headerName: 'From',
    type: 'number',
    width: 150,
    
  },
];

const rows = [
  { id: 1, qty: '12', price: '$10', exp: '10 hours', from:'Joe' },
  { id: 2, qty: '2', price: '$21', exp: '4 days', from:'Smoe1' },
  { id: 3, qty: '2', price: '$45', exp: '3 days', from:'Boe3' },
  { id: 5, qty: '1', price: '$48', exp: '16 days', from:'Xtoe' },
  { id: 6, qty: '0', price: '$200', exp: '21 hours', from:'BrO' },
  { id: 7, qty: '8', price: '$29', exp: '15 days', from:'SOE' },
  { id: 8, qty: '5', price: '$98', exp: '13 hours', from:'Moey' },
  { id: 9, qty: '1', price: '$71', exp: '1 hour', from:'Madut' },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 350, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        
      />
    </Box>
  );
}