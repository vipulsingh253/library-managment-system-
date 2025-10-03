import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import BrowseBooks from './pages/BrowseBooks.jsx';
import BookDetails from './pages/BookDetails.jsx';
import AddBook from './pages/AddBook.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <>
      <nav className="bg-blue-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="text-xl font-bold" to="/">Online Library</Link>
          <ul className="flex space-x-6">
            <li><Link className="hover:text-gray-200" to="/">Home</Link></li>
            <li><Link className="hover:text-gray-200" to="/books/all">Browse Books</Link></li>
            <li><Link className="hover:text-gray-200" to="/add-book">Add Book</Link></li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
