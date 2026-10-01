import React from 'react'
import { useState } from 'react'

function AddBookForm({ onAddBook }) {
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && author && genre) {
      onAddBook(name, author, genre)
      setName('')
      setAuthor('')
      setGenre('')
    }
  }

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default AddBookForm