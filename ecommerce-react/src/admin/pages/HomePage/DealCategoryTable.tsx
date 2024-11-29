import React from 'react'
import HomeCategoryTable from './HomeCategoryTable'
import { useFormik } from 'formik'
import { Category, Discount } from '@mui/icons-material'

const DealCategoryTable = () => {
  const formik=useFormik({
    initialValues:{
      Discount:0,
      Category:""
    },
    onSubmit:(values)=>{
      console.log("form submit",values)
    }
  })


  return (
    <div><HomeCategoryTable/></div>
  )
}

export default DealCategoryTable