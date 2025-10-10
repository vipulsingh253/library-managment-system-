import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Optional: Card color accent array for variety
const cardColors = [
  "from-blue-100 to-white",
  "from-indigo-100 to-white",
  "from-yellow-100 to-white",
  "from-green-100 to-white",
  "from-pink-100 to-white",
  "from-purple-100 to-white"
];

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const books = useSelector(state => state.books.filter(book => book.popular));
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-4xl font-extrabold mb-6 text-blue-700">Welcome to the Online Library</h1>
      <p className="mb-8 text-lg text-gray-700">Explore your favorite books by category!</p>

      <h3 className="text-2xl font-semibold mb-2 text-blue-800">Categories</h3>
      <ul className="flex flex-wrap gap-3 mb-10">
        {['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography', 'Mystery', 'Fantasy'].map(cat => (
          <li key={cat}>
            <Link 
              to={`/books/${cat.toLowerCase()}`}
              className="px-4 py-2 border-2 border-blue-400 text-blue-700 bg-white rounded-xl hover:bg-blue-700 hover:text-white font-medium shadow hover:scale-105 transition"
            >
              {cat}
            </Link>
          </li>
        ))}
      </ul>

      <h3 className="text-2xl font-bold mb-5 text-blue-800">Popular Books</h3>
      <input
        type="text"
        className="w-full p-3 border-2 border-blue-200 rounded-xl mb-6 focus:outline-none focus:border-blue-500 shadow-sm transition"
        placeholder="Search popular books by Title or Author"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredBooks.map((book, idx) => (
          <div
            key={book.id}
            className={`bg-gradient-to-br ${
              cardColors[idx % cardColors.length]
            } rounded-2xl shadow-xl p-6 flex flex-col justify-between border-2 border-blue-200 transition hover:-translate-y-1 hover:shadow-2xl`}
          >
            <div>
              <h5 className="text-xl font-extrabold mb-2 text-blue-800">{book.title}</h5>
              <p className="text-md italic text-gray-700 mb-2">by {book.author}</p>
              <p className="text-gray-600 mb-4" style={{ minHeight: "48px" }}>
                {book.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="inline-flex items-center font-semibold text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full text-sm">
                <svg className="w-4 h-4 mr-1 fill-current text-yellow-500" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.955L10 0l2.948 5.955 6.562.955-4.755 4.635 1.123 6.545z"/>
                </svg>
                {book.rating} / 5
              </span>
              <Link
                to={`/book/${book.id}`}
                className="bg-blue-600 text-white px-4 py-1.5 rounded-lg shadow hover:bg-blue-700 font-medium transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
        {filteredBooks.length === 0 && (
          <p className="col-span-full text-gray-600 text-center text-lg">No books found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
