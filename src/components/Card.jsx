import React from 'react'
import Headphones from '../assets/Headphones.jpg'
const Card = () => {
    return (
        <div className='border p-4 rounded-md shadow-2xl w-[80%] max-w-[500px]'>
            <div className='relative h-60 mb-4'>
                <img className='w-full h-full absolute object-cover rounded' src={Headphones} />
            </div>
            <div>
                <p className='font-semibold'>Apple Headphones</p>
                <p className='text-sm pb-2'>Price: $299</p>
                <p className='font-thin'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo fuga culpa sequi ipsam at doloribus cupiditate aliquam repellendus id inventore ratione earum voluptates quod asperiores itaque molestiae cum repudiandae, praesentium alias autem sed minima quis. Excepturi ut pariatur rerum in!</p>
            </div>
        </div>
    )
}

export default Card
