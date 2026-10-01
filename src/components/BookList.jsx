import React from 'react'
import BookItem from './BookItem'

function BookList({ books, onDelete }) {
    if (!books || books.length === 0) {
        return <p>No books found.</p>
    }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map(book => (
        <BookItem key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default BookList