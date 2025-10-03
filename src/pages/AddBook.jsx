import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../store.js';
import { useNavigate } from 'react-router-dom';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography', 'Mystery', 'Fantasy'];

function AddBook() {
  const [form, setForm] = useState({
    title: '',
    author: '',
    category: categories[0],
    description: '',
    rating: '',
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!form.title) newErrors.title = 'Title is required';
    if (!form.author) newErrors.author = 'Author is required';
    if (!form.description) newErrors.description = 'Description is required';
    if (!form.rating) newErrors.rating = 'Rating is required';
    else if (isNaN(form.rating) || form.rating < 0 || form.rating > 5)
      newErrors.rating = 'Rating must be between 0 and 5';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;
    dispatch(addBook({
      title: form.title,
      author: form.author,
      category: form.category,
      description: form.description,
      rating: Number(form.rating),
      popular: false,
    }));
    navigate('/books/all');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit} noValidate className="space-y-4 max-w-lg">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            className="w-full border border-gray-300 rounded p-2"
            value={form.title}
            onChange={handleChange}
          />
          {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="author">Author</label>
          <input
            id="author"
            name="author"
            className="w-full border border-gray-300 rounded p-2"
            value={form.author}
            onChange={handleChange}
          />
          {errors.author && <p className="text-red-600 text-sm mt-1">{errors.author}</p>}
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            className="w-full border border-gray-300 rounded p-2"
            value={form.category}
            onChange={handleChange}
          >
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            className="w-full border border-gray-300 rounded p-2"
            value={form.description}
            onChange={handleChange}
          />
          {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="rating">Rating (0 to 5)</label>
          <input
            id="rating"
            type="number"
            step="0.1"
            name="rating"
            className="w-full border border-gray-300 rounded p-2"
            value={form.rating}
            onChange={handleChange}
          />
          {errors.rating && <p className="text-red-600 text-sm mt-1">{errors.rating}</p>}
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
