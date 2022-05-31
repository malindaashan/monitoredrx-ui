import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TrashIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Input from '@material-ui/core/Input';
import Check from '@material-ui/icons/Check';
import { useEffect } from 'react';

const columns = [
  { id: 'id', label: 'ID', minWidth: 20 },
  { id: 'firstname', label: 'First Name', minWidth: 120 },
  { id: 'lastname', label: 'Last Name', minWidth: 120 },
  {
    id: 'address',
    label: 'Address',
    minWidth: 170,
  },
  {
    id: 'city',
    label: 'City',
    minWidth: 100,
  },
  {
    id: 'state',
    label: 'State',
    minWidth: 100,
  },
  {
    id: 'zipcode',
    label: 'ZipCode',
    minWidth: 70,
  },
  {
    id: 'phonenumber',
    label: 'Phone Number',
    minWidth: 120,
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 100,
    align: 'left'
  },
];


export default function PatientDT({ data, fetchData, editingIndex, enableEdit, saveEdit, handleEdit, deletePatient }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleRemove = (id) => {
    deletePatient(id)
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}

            </TableRow>
          </TableHead>
          <TableBody>
            {data.length !== undefined ? data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => {
                const editing = editingIndex === i;
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        column.id === 'action' ?
                          <TableCell key={column.id} align={column.align}>
                            {editing ? <Check onClick={() => saveEdit(i)} /> : <EditIcon onClick={() => { enableEdit(i) }} />}

                            <TrashIcon onClick={() => handleRemove(row.id)} />
                          </TableCell> :
                          editing ?
                            <TableCell key={column.id} align={column.align}>
                              <Input value={value}
                                onChange={(e) => handleEdit(e, column.id, i)}>
                              </Input>
                            </TableCell>
                            :
                            <TableCell key={column.id} align={column.align}>
                              {value}
                            </TableCell>

                      );
                    })}

                  </TableRow>
                );
              }) : null}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

  );

}