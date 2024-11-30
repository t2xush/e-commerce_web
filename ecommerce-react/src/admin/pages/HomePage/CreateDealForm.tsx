import { Dayjs } from "dayjs";
import { useFormik } from "formik";
import React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Button, FormControl, Grid2, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

interface CouponFormValues {
  code: String,
  discountPercentage: number,
  validityStartDate: Dayjs | null,
  validityEndDate: Dayjs | null,
  minimumOrderValue: number,
}
const CreateDealForm = () => {
    const formik=useFormik({
        initialValues:{
          discount:0,
          category:""
        },
        onSubmit:(values)=>{
          console.log("form submit",values)
        }
      })

  return (
  <Box component={"form"} onSubmit={formik.handleSubmit}
  className="space-y-6">
    <Typography variant="h4" className="text-center">
        Create Deal
    </Typography>
    <TextField
              fullWidth
              name="discount"
              label="Discount "
              value={formik.values.discount}
              onChange={formik.handleChange}
              error={formik.touched.discount && Boolean(formik.errors.discount)}
              helperText={formik.touched.discount && formik.errors.discount}
            />
                  <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formik.values.category}
            label="category"
            onChange={formik.handleChange}
          >

<MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>

          </Select>
        </FormControl>

        <Button variant="contained" type="submit" fullWidth sx={{py:".8rem"}}>
            Create Deal
          </Button>
  </Box>
  );
};

export default CreateDealForm