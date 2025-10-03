import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector(state =>
    state.books.find(b => b.id.toString() === id)
  );

  if (!book) {
    return (
      <div>
        <h3 className="text-xl font-semibold mb-4">Book not found</h3>
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" 
          onClick={() => navigate('/books/all')}
        >
          Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
      <h5 className="text-xl italic mb-4">By {book.author}</h5>
      <p className="mb-4">{book.description}</p>
      <p className="mb-6 font-semibold">Rating: {book.rating} / 5</p>
      <button 
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" 
        onClick={() => navigate(-1)}
      >
        Back to Browse
      </button>
    </div>
  );
}

export default BookDetails;
