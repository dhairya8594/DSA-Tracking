import React from 'react'
import { Link } from 'react-router-dom'

const Cards = () => {
  return (
    <>
    <div className='card'>
        <h2>Array</h2>
        <Link className="bn39" to="../Pages/ArrayQ.jsx"><span class="bn39span">Start Now 🙇🏻‍♂️</span></Link>
    </div>
    <div className='card'>
      <h2>Matrix</h2>
      <Link className="bn39" to="../Pages/MatrixQ.jsx"><span class="bn39span">Start Now 🙇🏻‍♂️</span></Link>
    </div>
    <div className='card'>
      <h2>String</h2>
      <Link className="bn39" to="../Pages/Stringlist.jsx"><span class="bn39span">Start Now 🙇🏻‍♂️</span></Link>
      
    </div>
    <div className='card'>
      <h2>SearchSorting</h2>
      <Link className="bn39" to="../Pages/SearchSortinsQ.jsx"><span class="bn39span">Start Now 🙇🏻‍♂️</span></Link>
    </div>
    <div className='card'>
        <h2>LinkedList</h2>
        <Link className="bn39" to="../Pages/LinkedListQ.jsx"><span class="bn39span">Start Now 🙇🏻‍♂️</span></Link>
    </div>
    <div className='card'>
        <h2>BinaryTree</h2>
        <Link className="bn39" to="../Pages/BinaryTree.jsx"><span class="bn39span">Start Now 🙇🏻‍♂️</span></Link>
    </div>
    <div className='card'>
      <h2>  BST</h2>
      <Link className="bn39" to="../Pages/BST.jsx"><span class="bn39span">Start Now 🙇🏻‍♂️</span></Link>

    </div>
      
    </>
  )
}

export default Cards
