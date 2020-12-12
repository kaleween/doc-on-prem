import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';

const columns = [
    {
        id: 'delete',
        align: 'Center',
    },
    {
        id: 'name',
        label: 'Name',
        align: 'Left',
        width: '80%',
    },
    {
        id: 'size',
        label: 'Size',
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'lastModified',
        label: 'lastModified',
        align: 'right',
    },
];

function createData(name, size, lastModified) {
    return {name, size, lastModified};
}

const rows = [
    createData('India', 1324171354, 3287263),
    createData('China', 1403500365, 9596961),
    createData('Italy', 60483973, 301340),
    createData('United States', 327167434, 9833520),
    createData('Canada', 37602103, 9984670),
    createData('Australia', 25475400, 7692024),
    createData('Germany', 83019200, 357578),
    createData('Ireland', 4857000, 70273),
    createData('Mexico', 126577691, 1972550),
    createData('Japan', 126317000, 377973),
    createData('France', 67022000, 640679),
    createData('United Kingdom', 67545757, 242495),
    createData('Russia', 146793744, 17098246),
    createData('Nigeria', 200962417, 923768),
    createData('Brazil', 210147125, 8515767),
    createData('India', 1324171354, 3287263),
    createData('China', 1403500365, 9596961),
    createData('Italy', 60483973, 301340),
    createData('United States', 327167434, 9833520),
    createData('Canada', 37602103, 9984670),
    createData('Australia', 25475400, 7692024),
    createData('Germany', 83019200, 357578),
    createData('Ireland', 4857000, 70273),
    createData('Mexico', 126577691, 1972550),
    createData('Japan', 126317000, 377973),
    createData('France', 67022000, 640679),
    createData('United Kingdom', 67545757, 242495),
    createData('Russia', 146793744, 17098246),
    createData('Nigeria', 200962417, 923768),
    createData('Brazil', 210147125, 8515767),
    createData('India', 1324171354, 3287263),
    createData('China', 1403500365, 9596961),
    createData('Italy', 60483973, 301340),
    createData('United States', 327167434, 9833520),
    createData('Canada', 37602103, 9984670),
    createData('Australia', 25475400, 7692024),
    createData('Germany', 83019200, 357578),
    createData('Ireland', 4857000, 70273),
    createData('Mexico', 126577691, 1972550),
    createData('Japan', 126317000, 377973),
    createData('France', 67022000, 640679),
    createData('United Kingdom', 67545757, 242495),
    createData('Russia', 146793744, 17098246),
    createData('Nigeria', 200962417, 923768),
    createData('Brazil', 210147125, 8515767),
];

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: '80vh',
        [theme.breakpoints.down(500)]: {
            maxHeight: '70vh'
        },
        [theme.breakpoints.between(500, 700)]: {
            maxHeight: '75vh'
        },
    },
}));

const ListFiles = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{width: column.width}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {
                                                    column.id === 'delete' ?
                                                        <IconButton onClick={null}> <DeleteIcon/> </IconButton> :
                                                        null
                                                }

                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 50, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default ListFiles;
