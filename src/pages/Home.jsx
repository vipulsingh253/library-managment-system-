import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography', 'Mystery', 'Fantasy'];

function Home() {
  const books = useSelector(state => state.books.filter(book => book.popular));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to the Online Library</h1>
      <p className="mb-6">Explore your favorite books by category!</p>

      <h3 className="text-xl font-semibold mb-2">Categories</h3>
      <ul className="flex flex-wrap gap-3 mb-8">
        {categories.map(cat => (
          <li key={cat}>
            <Link 
              to={`/books/${cat.toLowerCase()}`} 
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
            >
              {cat}
            </Link>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mb-4">Popular Books</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map(book => (
          <div key={book.id} className="border rounded shadow p-4 flex flex-col">
            <h5 className="text-lg font-bold mb-1">{book.title}</h5>
            <p className="text-gray-600 mb-4">by {book.author}</p>
            <Link 
              to={`/book/${book.id}`} 
              className="mt-auto inline-block bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
