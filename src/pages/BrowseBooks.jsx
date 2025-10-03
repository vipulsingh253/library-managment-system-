import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function BrowseBooks() {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const books = useSelector(state => state.books);

  const filteredByCategory = category === 'all'
    ? books
    : books.filter(book => book.category.toLowerCase() === category.toLowerCase());

  const filteredBooks = filteredByCategory.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Books: {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Search by Title or Author"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div className="space-y-3">
          {filteredBooks.map(book => (
            <div key={book.id} className="flex justify-between items-center p-3 border rounded">
              <div>
                <strong className="text-lg">{book.title}</strong> by <span className="italic">{book.author}</span>
              </div>
              <Link 
                to={`/book/${book.id}`} 
                className="text-blue-600 hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BrowseBooks;
