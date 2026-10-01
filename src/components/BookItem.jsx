import React from 'react'

function BookItem({ book }) {
  return (
    <div>
      <h3>{book.name}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
    </div>
  )
}

export default BookItem