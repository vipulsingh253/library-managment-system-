import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    description: "A classic novel about the American dream.",
    rating: 4.2,
    popular: true,
  },
  {
    id: 2,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Non-Fiction",
    description: "A landmark volume in science writing.",
    rating: 4.5,
    popular: true,
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    description: "Science fiction epic on desert planet Arrakis.",
    rating: 4.6,
    popular: true,
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    description: "A novel about racial injustice in the Deep South.",
    rating: 4.8,
    popular: true,
  },
  {
    id: 5,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    description: "Explores the history and impact of Homo sapiens.",
    rating: 4.7,
    popular: true,
  },
  {
    id: 6,
    title: "Neuromancer",
    author: "William Gibson",
    category: "Sci-Fi",
    description: "A cyberpunk classic exploring artificial intelligence and hacking.",
    rating: 4.0,
    popular: false,
  },
  {
    id: 7,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    description: "Dystopian novel about totalitarian surveillance state.",
    rating: 4.5,
    popular: true,
  },
  {
    id: 8,
    title: "Educated",
    author: "Tara Westover",
    category: "Biography",
    description: "Memoir of a woman who escapes a strict upbringing through education.",
    rating: 4.5,
    popular: true,
  },
  {
    id: 9,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    description: "A fantasy adventure story of Bilbo Baggins.",
    rating: 4.7,
    popular: true,
  },
  {
    id: 10,
    title: "The Martian",
    author: "Andy Weir",
    category: "Sci-Fi",
    description: "An astronaut's survival story on Mars.",
    rating: 4.6,
    popular: true,
  },
];


const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    addBook(state, action) {
      state.unshift({ id: Date.now(), ...action.payload });
    },
  },
});

export const { addBook } = booksSlice.actions;

const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
  },
});

export default store;
