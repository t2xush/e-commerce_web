import { Box, Grid2, TextField } from "@mui/material";
import React from "react";

const BecomeSellerFormStep2 = ({ formik }: any) => {
  return (
    <Box>
      <Grid2 container spacing={3}>
      {/* <Grid2 size={{ xs: 12 }}>
          <TextField
            fullWidth
            name="fullname"
            label="fullname"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            error={formik.touched.fullname && Boolean(formik.errors.fullname)}
            helperText={ formik.error.fullname}
          />
        </Grid2> */}
       <Grid2 size={{ xs: 12 }}>
          <TextField
            fullWidth
            name="name"
            label="name"
            value={formik.values.pickupAddress.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.error.name}
          />
        </Grid2>

        <Grid2 size={{ xs: 6 }}>
          <TextField
            fullWidth
            name="mobile"
            label="Mobile"
            value={formik.values.pickupAddress.mobile}
            onChange={formik.handleChange}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.error.mobile}
          />
        </Grid2>
        <Grid2 size={{ xs: 6 }}>
          <TextField
            fullWidth
            name="pinCode"
            label="Pin Code"
            value={formik.values.pickupAddress.pinCode}
            onChange={formik.handleChange}
            error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
            helperText={formik.touched.pinCode && formik.error.pinCode}
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <TextField
            fullWidth
            name="address"
            label="address"
            value={formik.values.pickupAddress.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.error.address}
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <TextField
            fullWidth
            name="locality"
            label="locality"
            value={formik.values.pickupAddress.locality}
            onChange={formik.handleChange}
            error={formik.touched.locality && Boolean(formik.errors.locality)}
            helperText={formik.touched.locality && formik.error.locality}
          />
        </Grid2>
        <Grid2 size={{ xs: 6 }}>
          <TextField
            fullWidth
            name="city"
            label="city"
            value={formik.values.pickupAddress.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.error.city}
          />
        </Grid2>
        <Grid2 size={{ xs: 6 }}>
          <TextField
            fullWidth
            name="state"
            label="state"
            value={formik.values.pickupAddress.state}
            onChange={formik.handleChange}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.state && formik.error.state}
          />
        </Grid2>
       
      </Grid2>
    </Box>
  );
};

export default BecomeSellerFormStep2;
