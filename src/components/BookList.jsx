import React from 'react'

function BookList({ books }) {
  return (
    <div>
      {books.map(book => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  )
}

export default BookList