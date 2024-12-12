import React from 'react'

const SimilarProductCard = () => {
  return (
    <div>
        <div className="group px-4 relative">
      <div className="card">
        <img
        className='card-media object-top'
        src="https://images.pexels.com/photos/9834874/pexels-photo-9834874.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />

     
      </div>
      <div className="details pt-3 space-y-1 group-hover-effect rounded-mad">
        <div className="name">
          <h1>G&X
            {/* {item.seller?.businessDetails.businessName} */}
            </h1>
          <p>Orang Coat
            {/* {item.title} */}
            </p>
        </div>
        <div className="price flex items-center gap-3">
          <span className="font-sans text-gray-800">€400{/*item.sellingPrice*/}</span>
          <span className="thin-line-through text-gray-400">
            €699
          </span>
          <span className="text-primary-color font-semibold">
           60%
          </span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SimilarProductCard