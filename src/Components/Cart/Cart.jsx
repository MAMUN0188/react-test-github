import React from 'react';

const Cart = ({blog, handleDelete}) => {
    const {name, id} = blog
    return (
        <div className='flex gap-2'>
            <h1>{name}</h1>
            <button onClick={()=>handleDelete(id)} className='font-black text-xl'>Delete</button>
        </div>
    );
};

export default Cart;