import { useState } from 'react'
import BookList from './components/BookList'
import AddBookForm from './components/AddBookForm'



  const initialBooks = [
    {
    id: 1,
    name: "Atomic Habits",
    author:"James Clear",
    genre:"Self Development",
    image:"/AtomicHabits.webp"
  },

  {
    id: 2,
    name: "The Alchemist",
    author:"Paulo Coelho",
    genre:"Motivational",
    image:"/The Alchemist.jpeg"
  },

  {
    id: 3,
    name: "Think Big",
    author:"Dr. Ben Carson",
    genre:"Motivational",
    image:"/ThinkBig.jpg"
  },

  {
    id: 4,
    name: "Harry Potter and the Philosopher's Stone",
    author:"J.K. Rowling",
    genre:"Fantasy",
    image:"/HarryPotter.jpg"
  },

  {
    id: 5,
    name: "The Hobbit",
    author:"J.R.R. Tolkien",
    genre:"Fantasy",
    image:"/The-Hobbit.jpg"
  },

  {
    id: 6,
    name: "The Da Vinci Code",
    author:"Dan Brown",
    genre:"Mystery",
    image:"/TheDaVinci.jpg"
  },

  {
    id: 7,
    name: "The Great Gatsby",
    author:"F Scott Fitzgerald",
    genre:"Fiction",
    image:"/TheGreatGatsby.jpg"
  },

  {
    id: 8,
    name: "Animal Farm",
    author:"George Orwell",
    genre:"Fiction",
    image:"/animal_farm_cover2014.jpg"
  },

  {
    id: 9,
    name: "The 7 Habits of Highly Effective People",
    author:"Stephen R. Covey",
    genre:"Self Development",
    image:"/The7HabitsOfHighlyEffectivepeople.jpg"
  },

  {
    id: 10,
    name: "And then There Were None",
    author:"Agatha Cristie",
    genre:"Mystery",
    image:"/AndThenThereWereNone.jpg"
  },

  {
    id: 11,
    name: "Man's Search for Meaning",
    author:"Victor E Frankl",
    genre:"Motivational",
    image:"/MansSearchforMeaning.jpg"
  },


  {
    id: 12,
    name: "The Mountain Is You",
    author:"Brianna Wiest",
    genre:"Self Development",
    image:"/TheMountainisyou1.webp"
  }
  

]
  
function App() {
  const [books, setBooks] = useState(initialBooks)
  const [search, setSearch] = useState('')

  const addBook = (name, author, genre) => {
    setBooks([...books, { id: Date.now(), name, author, genre }])
  }

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h1 className="text-3xl font-bold">My Book Library</h1>
      
      <AddBookForm onAddBook={addBook} />
      <input className='border border-gray-300 rounded-lg px-4 py-2 w-full mb-4'
        type="text"
        placeholder="Search by book name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className='bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg' onClick={() => setSearch('')}>Clear Search</button>
      </div>
      <BookList books={filteredBooks} onDelete={deleteBook} />
    </div>
  )
}
export default App;
    