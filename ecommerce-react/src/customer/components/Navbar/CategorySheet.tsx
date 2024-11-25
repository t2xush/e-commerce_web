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


const categoryTwo = {
women:womenLevelTwo,
men:menLevelTwo,
home_furniture:furnitureLevelTwo,
electronics:electronicsLevelTwo,
}
const categoryThree = {
    women:womenLevelThree,
    men:menLevelThree,
    home_furniture:furnitureLevelThree,
    electronics:electronicsLevelThree,

}


const CategorySheet = () => {
  return (
  <Box className="bg-white shadow-lg lg:h-[500px] overflow-y-auto">
<div className='flex text-sm flex-wrap'>
{categoryTwo["women"]?.map((item) =><div>
    <p className='text-primary-color mb-5 font-semibold'>{item.name}</p>
</div>)}

</div>
  </Box>
  )
}

export default CategorySheet