import React from 'react'
import BookItem from './BookItem'

function BookList({ books, onDelete }) {
    if (!books || books.length === 0) {
        return <p>No books found.</p>
    }
  return (
    <div>
      {books.map(book => (
        <BookItem key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default BookList