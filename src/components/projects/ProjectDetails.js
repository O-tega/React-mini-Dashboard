import React from 'react'
import { useParams } from 'react-router-dom'


const ProductDetails=(props)=>{
    const {id} = useParams()

    return(
        <div className='flex justify-center'>
            <div className='w-3/4 px-10 my-10 shadow py-10'>
                <p className='text-2xl pb-5'> Project Title - {id}</p>
                <p className='text-gray-700 pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt quaerat nam architecto accusantium corrupti debitis minus expedita facere ut? Incidunt nesciunt ab doloremque beatae a eaque suscipit labore voluptatem?</p>
                <hr />
                <p className='text-sm font-medium text-gray-700 pt-3'>posted by Tega </p>
                <p className='text-sm text-gray-500'>5th October, 12:00pm</p>
            </div>
        </div>
    )
}


export default ProductDetails