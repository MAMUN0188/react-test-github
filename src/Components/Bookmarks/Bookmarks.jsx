import React from 'react';
import Cart from '../Cart/Cart';
import About from '../About/About';

const Bookmarks = ({handleTrueFalse, isActive, blogs, handleDelete}) => {
    return (
        <div className='w-1/3'>
            <h1>Bookmarks</h1>
            <div className='flex gap-5'>
                <button onClick={()=>handleTrueFalse('cart')} className={`${isActive ? 'btn style' : 'btn'}`}>Cart</button>
                <button onClick={()=>handleTrueFalse('about')} className={`${isActive ? 'btn' : 'btn style'}`}>About</button>
            </div>
            {
                isActive ? blogs.map(blog => <Cart handleDelete={handleDelete} blog={blog}></Cart>) : <About></About>
            }
        </div>
    );
};

export default Bookmarks;