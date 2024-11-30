import React, { useState } from "react";
import { menLevelTwo } from "../../../customer/data/category/level two/menLevelTwo";
import { womenLevelTwo } from "../../../customer/data/category/level two/womenLevelTwo";
import { furnitureLevelTwo } from "../../../customer/data/category/level two/furnitureLevelTwo";
import { electronicsLevelTwo } from "../../../customer/data/category/level two/electronicsLevelTwo";
import { menLevelThree } from "../../../customer/data/category/level three/menLevelThree";
import { womenLevelThree } from "../../../customer/data/category/level three/womenLevelThree";
import { furnitureLevelThree } from "../../../customer/data/category/level three/furnitureLevelThree";
import { electronicsLevelThree } from "../../../customer/data/category/level three/electronicsLevelThree";
import { Formik, useFormik } from "formik";
import { uploadToCloudinary } from "../../../Util/uploadToCloudinary";
import {
  Button,
  CircularProgress,
  colors,
  FormControl,
  FormHelperText,
  Grid2,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { AddPhotoAlternate, Close, Label } from "@mui/icons-material";
import { mainCategory } from "../../../customer/data/category/mainCategory";

const categoryTwo: { [key: string]: any[] } = {
  men: menLevelTwo,
  women: womenLevelTwo,
  kids: [],
  home_furniture: furnitureLevelTwo,
  beauty: [],
  electronics: electronicsLevelTwo,
};
const categoryThree: { [key: string]: any[] } = {
  men: menLevelThree,
  women: womenLevelThree,
  kids: [],
  home_furniture: furnitureLevelThree,
  beauty: [],
  electronics: electronicsLevelThree,
};

const AddProducts = () => {
  const [uploadingImage, setUploadingImage] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      mrpPrice: "",
      sellingPrice: "",
      quantity: "",
      color: "",
      images: [],
      category: "",
      category2: "",
      category3: "",
      sizes: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    setUploadingImage(true);
    const image = await uploadToCloudinary(file);

    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadingImage(false);
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  const childCategory = (category: any, parentCategoryId: any) => {
    return category.filter((child: any) => {
      return child.parentCategoryId == parentCategoryId;
    });
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-4 p-4">
        <Grid2 container spacing={2}>
          <Grid2 className="flex flex-wrap gap-5" spacing={2} size={{ xs: 12 }}>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label className="relative" htmlFor="fileInput">
              <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400">
                <AddPhotoAlternate className="text-gray-700" />
              </span>
              {uploadingImage && (
                <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center">
                  <CircularProgress />
                </div>
              )}
            </label>
            <div className="flex flex-wrap gap-2">
              {formik.values.images.map((image, index) => (
                <div className="relative">
                  <img
                    className="w-24 h-24 object-cover"
                    key={index}
                    src={image}
                    alt={`ProductImage ${index + 1}`}
                  />
                  <IconButton
                    onClick={() => handleRemoveImage(index)}
                    className=""
                    size="small"
                    color="error"
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      outline: "none",
                    }}
                  >
                    <Close sx={{ fontSize: "1rem" }} />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              required
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextField
              multiline
              rows={4}
              fullWidth
              id="description"
              name="description"
              label="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              required
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
            <TextField
              fullWidth
              id="mrp_price"
              name="mrpPrice"
              label="Mrp Price"
              type="number"
              value={formik.values.mrpPrice}
              onChange={formik.handleChange}
              error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
              helperText={formik.touched.mrpPrice && formik.errors.mrpPrice}
              required
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
            <TextField
              fullWidth
              id="sellingPrice"
              name="sellingPrice"
              label="Selling Price"
              type="number"
              value={formik.values.sellingPrice}
              onChange={formik.handleChange}
              error={
                formik.touched.sellingPrice &&
                Boolean(formik.errors.sellingPrice)
              }
              helperText={formik.touched.sellingPrice && formik.errors.mrpPrice}
              required
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
            <FormControl
              fullWidth
              error={formik.touched.color && Boolean(formik.errors.color)}
              required
            >
              <InputLabel id="color-label">Color</InputLabel>
              <Select
                labelId="color-label"
                id="color"
                name="color"
                value={formik.values.color}
                label="Color"
                onChange={formik.handleChange}
              >
                <MenuItem value="">
                  <em>none</em>
                </MenuItem>
                <MenuItem value="FREE">FREE </MenuItem>

                {/* {colors.map((color,index)=><MenuItem value={color.name}>
            <div className="flexx gap-3>">
              <span style={{backgroundColor:color.hex}} className={`h-5 w-5 rounded-full ${color.name==="white" ? "border":""}`}></span>
              <p>{color.name}</p></div></MenuItem>)} */}
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
            <FormControl
              fullWidth
              error={formik.touched.sizes && Boolean(formik.errors.sizes)}
              required
            >
              <InputLabel id="sizes-label">Sizes</InputLabel>
              <Select
                labelId="sizes-label"
                id="sizes"
                name="sizes"
                value={formik.values.sizes}
                label="Sizes"
                onChange={formik.handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="FREE">FREE </MenuItem>
                <MenuItem value="S">S </MenuItem>
                <MenuItem value="M">M </MenuItem>
                <MenuItem value="L">L </MenuItem>
                <MenuItem value="XL">XL </MenuItem>

                {/* {colors.map((color,index)=><MenuItem value={color.name}>
            <div className="flexx gap-3>">
              <span style={{backgroundColor:color.hex}} className={`h-5 w-5 rounded-full ${color.name==="white" ? "border":""}`}></span>
              <p>{color.name}</p></div></MenuItem>)} */}
              </Select>
            </FormControl>
          </Grid2>

          {/* main category */}
          <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)}
              required
            >
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="category"
                value={formik.values.category}
                label="Category"
                onChange={formik.handleChange}
              >
                {/* <MenuItem value="">
                  <em>None</em>
                </MenuItem> */}
                {mainCategory.map((item) => (
                    <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                  ))}
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid2>

          {/* second category */}
          <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)}
              required
            >
              <InputLabel id="category2-label">Second Category</InputLabel>
              <Select
                labelId="category2-label"
                id="category2"
                name="category2"
                value={formik.values.category2}
                label="Second Category"
                onChange={formik.handleChange}
              >
                {/* <MenuItem value="">
                  <em>None</em>
                </MenuItem> */}
                {formik.values.category &&
                  categoryTwo[formik.values.category].map((item) => (
                    <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                  ))}
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid2>

          {/* third category */}
          <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)}
              required
            >
              <InputLabel id="category-label">Third Category</InputLabel>
              <Select
                labelId="category-label"
                id="category3"
                name="category3"
                value={formik.values.category3}
                label="Third Category"
                onChange={formik.handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {formik.values.category2 &&
                  childCategory(
                    categoryThree[formik.values.category],
                    formik.values.category2
                  )?.map((item: any) => (
                    <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                  ))}
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid2>
{/* button */}
          <Grid2 size={{ xs: 12 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{ p: "14px" }}
              color="primary"
              type="submit"
            >
              {false ? (
                <CircularProgress
                  size="small"
                  sx={{ width: "27px", height: "27px" }}
                />
              ) : (
                "Add Product"
              )}
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </div>
  );
};

export default AddProducts;
