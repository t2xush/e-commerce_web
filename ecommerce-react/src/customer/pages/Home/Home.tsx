import React from 'react'
import ElectricCategory from './ElectricCategory/ElectricCategory'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import Deal from './Deal/Deal'

const Home = () => {
    return (

        <div className='space y-5 lg:space y-10 relative pb-20'>

            <ElectricCategory />
            <CategoryGrid />  
            <Deal />
        </div>

    )
}

export default Home