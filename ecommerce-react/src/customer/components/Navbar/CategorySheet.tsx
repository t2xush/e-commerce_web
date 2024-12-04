import React from 'react'
import { womenLevelTwo } from '../../data/category/level two/womenLevelTwo'
import { menLevelTwo } from '../../data/category/level two/menLevelTwo'
import { furnitureLevelTwo } from '../../data/category/level two/furnitureLevelTwo'
import { electronicsLevelTwo } from '../../data/category/level two/electronicsLevelTwo'
import { womenLevelThree } from '../../data/category/level three/womenLevelThree'
import { menLevelThree } from '../../data/category/level three/menLevelThree'
import { furnitureLevelThree } from '../../data/category/level three/furnitureLevelThree'
import { electronicsLevelThree } from '../../data/category/level three/electronicsLevelThree'
import { Box, dividerClasses } from '@mui/material'
import { useNavigate } from 'react-router-dom'



const categoryTwo:{[key:string]:any[]} = {
    women: womenLevelTwo,
    men: menLevelTwo,
    home_furniture: furnitureLevelTwo,
    electronics: electronicsLevelTwo,
}
const categoryThree:{[key:string]:any[]} = {
    women: womenLevelThree,
    men: menLevelThree,
    home_furniture: furnitureLevelThree,
    electronics: electronicsLevelThree,

}


const CategorySheet = ({selectedCategory,setShowSheet}:any) => {
    const navigate=useNavigate()

    const childCategory = (category: any, parentCategoryId: any) => {
        return category.filter((child: any) => child.parentCategoryId === parentCategoryId)
    }
    return (
        <Box sx={{ zIndex: 2 }}
            className="bg-white shadow-lg lg:h-[200px] overflow-y-auto">
            <div className='flex text-sm flex-wrap'>
                {categoryTwo[selectedCategory]?.map((item:any,index) => <div
                className={`p-8 lg:w-[20%] ${index % 2 === 0 ? "bg-slate-50":"bg-white"}`}
                >
                    <p className='text-primary-color mb-5 font-semibold'>{item.name}</p>
                    <ul className='space-y-3'>
                        {childCategory(categoryThree[selectedCategory], item.categoryId).map((item:any) => <div>
                            <li 
                               onClick={()=>navigate("/products/"+item.categoryId)}
                            className='hover:text-primary-color cursor-pointer'
                            >
                                {item.name}
                            </li>
                        </div>)}


                    </ul>

                </div>)}

            </div>
        </Box>
    )
}

export default CategorySheet