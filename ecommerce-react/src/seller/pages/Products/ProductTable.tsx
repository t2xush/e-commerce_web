import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector } from '../../../state/store';
import { useEffect, useState } from 'react';
import { deleteProduct, fetchSellerProducts } from '../../../state/seller/sellerProductSlice';
import { Product } from '../../../types/ProductTypes';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { number } from 'yup';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function ProductTable() {
  const dispatch=useAppDispatch();
  const {sellerProduct}=useAppSelector(store=>store);
  const [open, setOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);
  

  // useEffect(()=>{
  //   dispatch(fetchSellerProducts(localStorage.getItem("jwt")))
  // },[])


    useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      dispatch(fetchSellerProducts(jwt));
    }
  }, [dispatch]);

  const handleClickOpen = (id: number) => {
    setProductToDelete(id); // Set the product id to delete
    setOpen(true); // Open the dialog
  };

  // Handle closing the dialog
  const handleClose = () => {
    setOpen(false);
    setProductToDelete(null); // Reset the product id
  };

  // Handle the delete action
  const handleDelete = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt && productToDelete) {
      dispatch(deleteProduct({ id: productToDelete, jwt }));
      handleClose(); // Close the dialog after deletion
    }
  };



  return (
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Images</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">MRP</StyledTableCell>
            <StyledTableCell align="right">Selling Price</StyledTableCell>
            <StyledTableCell align="right">Color</StyledTableCell>
            <StyledTableCell align="right">Update Stock</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {sellerProduct.products.map((item:Product) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                <div className='flex gap-1 flex-wrap'>
                  {item.images.map((image)=>< img className='w-20 rounded-md' alt='' src={image}/>)}

                </div>
               
              </StyledTableCell>
              <StyledTableCell align="right">{item.title}</StyledTableCell>
              <StyledTableCell align="right">{item.mrpPrice}</StyledTableCell>
              <StyledTableCell align="right">{item.sellingPrice}</StyledTableCell>
              <StyledTableCell align="right">{item.color}</StyledTableCell>
              <StyledTableCell align="right">{
                <Button size='small'>
                  in_stock</Button>
                  }</StyledTableCell>
              <StyledTableCell align="right">{
                <Button size='small'>
                  <Edit/>
                  </Button>
                  }</StyledTableCell>
{/*                   
                    <StyledTableCell align="right">
                    {typeof item.id === 'number' && (
                  <Button size="small" onClick={() => handleDelete(Number(item.id))}>
                    <Delete />
                  </Button>
                )}
                 
                  </StyledTableCell> */}
                    <StyledTableCell align="right">
                  <Button size="small" onClick={() => handleClickOpen(Number(item.id))}>
                    <Delete />
                  </Button>
                </StyledTableCell>
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you sure you want to delete this product?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleDelete} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
   
  );
}