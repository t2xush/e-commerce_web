import React, { useEffect, useState } from 'react'
import FilterSection from './FilterSection'
import ProductCard from './ProductCard'
import { Divider, FormControl, IconButton, InputLabel, MenuItem, Select, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import { FilterAlt } from '@mui/icons-material'
import { useActionData, useParams, useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../state/store'
import { fetchAllProducts } from '../../../state/customer/productSlice'


const Product = () => {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
    const [sort, setSort] = useState();

    const dispatch=useAppDispatch()
    const [searchParam,setSearchParam]=useSearchParams()
    const{category}=useParams();
    const{product}=useAppSelector((store=>store))

    const handleSortChange = (event: any) => {
        setSort(event.target.value);
    };

    useEffect(()=>{
        const [minPrice,maxPrice]=searchParam.get('price')?.split("-") || [];
        const color=searchParam.get("color");

      const  miniDiscount=searchParam.get("discount")?Number(searchParam.get("discount")):undefined;



    const newFilter={
        color:color||"",
        minPrice:minPrice? Number(minPrice):undefined,
        maxPrice:maxPrice? Number(maxPrice):undefined,
        miniDiscount,

    }

    console.log(newFilter)

        dispatch(fetchAllProducts(newFilter))
    },[category,searchParam])


    return (
        <div className='-z-10 mt-10'>
            <div>
                <h1 className='text-3xl text-center font-bold text-gray-700 pb-5 px-9
              uppercase space-x-2'>women socks</h1>
            </div>
            <div className='lg:flex'>
                <section className='filter_section hidden lg:block w-[20%]'>
                    <FilterSection />
                </section>
                <div className='w-full lg:w-[80%] space-y-5'>
                    <div className='flex justify-between items-center px-9 h-[40px]'>
                        <div className='relative w-[50%]'>
                            {!isLarge && (<IconButton>
                                <FilterAlt />
                            </IconButton>)}
                            {!isLarge && (<Box>
                                <FilterSection />
                            </Box>)}

                        </div>
                        <FormControl size='small' sx={{width:"200px"}}>
                            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sort}
                                label="Age"
                                onChange={handleSortChange}
                            >
                                <MenuItem value={"price_low"}>Price : Low - High</MenuItem>
                                <MenuItem value={"price_high"}>Price : High - Low</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                    </div>
                    <Divider />
                    <section className='products_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center'>
                        
                        {product.products.map((item) => <ProductCard item={item} />)}
                    </section>

                </div>
                {/* pagenation function 04:08 */}
                <div>

                </div>

            </div>

        </div>
    )
}

export default Product