# Book Library

A React app that displays a list of books. You can add new books, delete books, and search by title.

**Live demo:** [your deployed link]

## Features

- Book list rendered dynamically from an array of objects using `.map()`
- Separate components for the list (`BookList`) and each item (`BookItem`)
- Add new books with a form (`AddBookForm`)
- Delete books with a button on each item
- Search/filter books by title
- Fade-in animation for list items
- Responsive, simple CSS styling

## Tech Stack

- React (JavaScript)
- Vite
- CSS
- Deployed on [Vercel / Netlify / GitHub Pages]

## Project Structure

```
src/
  App.jsx
  App.css
  components/
    BookList.jsx
    BookItem.jsx
    AddBookForm.jsx
```

## Getting Started

1. Clone the repository
```bash
   git clone [your repo link]
   cd [your repo name]
```
2. Install dependencies
```bash
   npm install
```
3. Start the development server
```bash
   npm run dev
```
4. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## How It Works

- `App` holds the books array in state, along with the add, delete, and search logic.
- `BookList` receives the (filtered) books and maps over them, rendering one `BookItem` per book.
- `BookItem` displays a single book and calls the delete handler it receives from `App`.
- `AddBookForm` manages its own input fields and passes the new book up to `App` on submit.

## Author

[Sarah Matheka] - [mathekasarah-prog]
