import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handlAddCart}) => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    return (
        <div className='w-2/3'>
            <h1>Players: {players.length}</h1>
            <div className='grid grid-cols-2'>
                {
                    players.map(player => <Blog handlAddCart={handlAddCart} player={player}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;