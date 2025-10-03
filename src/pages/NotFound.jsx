import { useLocation, Link } from 'react-router-dom';

function NotFound() {
  const location = useLocation();
  return (
    <div className="text-center mt-20">
      <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="mb-6">The requested URL <code className="bg-gray-100 px-2 py-1 rounded">{location.pathname}</code> was not found.</p>
      <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
    </div>
  );
}

export default NotFound;
