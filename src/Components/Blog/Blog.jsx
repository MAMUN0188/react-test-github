import React from 'react';

const Blog = ({ player, handlAddCart }) => {
    const { id, cover, name, price, age } = player
    return (
        <div className='mb-8'>
            <div className='w-[350px]'>
                <img className='w-[350px] h-[200px] rounded-md' src={cover} alt="" />
                <div className='flex justify-between text-2xl font-medium'>
                    <h1>{name}</h1>
                    <h1>{price}</h1>
                </div>
                <button onClick={()=>handlAddCart(player)} className='my-4 border p-2 rounded-md border-red-600'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Blog;