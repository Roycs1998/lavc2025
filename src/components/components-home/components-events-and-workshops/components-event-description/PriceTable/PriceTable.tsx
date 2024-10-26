import * as React from 'react'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material'

function createData(Color: string, Categoria: string, Precios: number) {
  return { Color, Categoria, Precios }
}

const rows = [
  createData('#1F9DDC', 'MEDICO VETERINARIO', 159.0),
  createData('#F7CA2A', 'ESTUDIANTE O BACHILLER', 237.0),
  createData('#F6A51A', 'VETERINARIO/ESTUDIANTE EXTRA ', 237.0)
]

export const PriceTable = () => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none', width: '600px' }}>
      <Table sx={{ borderCollapse: 'collapse' }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: 'none' }}>CATEGORIA</TableCell>
            <TableCell align='right' sx={{ border: 'none' }}>
              PRECIOS
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.Categoria} sx={{ '&:last-child td, &:last-child th': { border: 'none' } }}>
              <TableCell component='th' scope='row' sx={{ border: 'none', padding: '9px 8px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', border: 'none' }}>
                  <Box
                    sx={{
                      width: 11,
                      height: 11,
                      borderRadius: '50%',
                      backgroundColor: row.Color,
                      marginRight: 2,
                      boxShadow: `0 0 8px ${row.Color}, 0 0 10px ${row.Color}`,
                      border: 'none'
                    }}
                  />
                  {row.Categoria}
                </Box>
              </TableCell>
              <TableCell align='right' sx={{ fontWeight: 'bold', border: 'none', padding: '2px 8px' }}>
                S/ {row.Precios.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
