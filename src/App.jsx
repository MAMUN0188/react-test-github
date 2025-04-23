import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [isActive, setIsActive] = useState(true)
  const [blogs, setBlogs] = useState([])

  function HandleTrueFalse(status){
    if(status == 'cart'){
      setIsActive(true)
    }
    else{
      setIsActive(false)
    }
  }

  function HandleAddCart(player){
    const finding = blogs.find(b => b.id == player.id)
    if(finding){
      alert('Product already added')
    }
    else{
      const newBlogs = [...blogs, player]
      setBlogs(newBlogs)
    }
  }

  function HandleDelete(id){
    const remainingProducts = blogs.filter(b => b.id !== id)
    setBlogs(remainingProducts)
  }
  return (
    <>
      <div className='max-w-[1200px] mx-auto flex justify-between mt-20'>
        <Blogs  handlAddCart={HandleAddCart}></Blogs>
        <Bookmarks handleDelete={HandleDelete} blogs={blogs} isActive={isActive} handleTrueFalse={HandleTrueFalse}></Bookmarks>
      </div>
    </>
  )
}

export default App
