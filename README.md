Online Library Application
A modern, feature-rich online library management system built with React, Redux Toolkit, and React Router. Browse books by category, search for your favorites, view detailed information, and add new books to the collection.
Features

📚 Browse books by category (Fiction, Non-Fiction, Sci-Fi, Biography, Mystery, Fantasy)
🔍 Search functionality by title or author
⭐ Popular books showcase on homepage
📖 Detailed book information pages
➕ Add new books with form validation
🧭 Dynamic routing with React Router
💾 State management with Redux Toolkit
🎨 Responsive design with Tailwind CSS
❌ 404 error handling for invalid routes

Technologies Used

React - Frontend library
Redux Toolkit - State management
React Router - Client-side routing
Tailwind CSS - Styling framework
Vite - Build tool and development server

Project Structure
├── src/
│   ├── pages/
│   │   ├── Home.jsx              # Homepage with categories and popular books
│   │   ├── BrowseBooks.jsx       # Browse and search books by category
│   │   ├── BookDetails.jsx       # Individual book details page
│   │   ├── AddBook.jsx           # Form to add new books
│   │   └── NotFound.jsx          # 404 error page
│   ├── App.jsx                   # Main app component with navigation
│   ├── main.jsx                  # App entry point
│   ├── store.js                  # Redux store configuration
│   ├── App.css                   # Additional styles
│   └── index.css                 # Global styles
Installation

Clone the repository:

bashgit clone <https://github.com/vipulsingh253/library-managment-system-.git>
cd online-library

Install dependencies:

bashnpm install

Start the development server:

bashnpm run dev

Open your browser and navigate to:

http://localhost:5173
Usage
Browsing Books

Home Page: View popular books and browse by category
Category View: Click on any category to see all books in that category
Browse All: Navigate to "Browse Books" to see all books with search functionality
Search: Use the search bar to filter books by title or author

Viewing Book Details

Click "View Details" on any book to see:

Full title and author
Complete description
Rating (out of 5)
Category



Adding New Books

Navigate to "Add Book" from the navigation menu
Fill in the required fields:

Title (required)
Author (required)
Category (dropdown selection)
Description (required)
Rating (0-5, with decimal support)


Click "Add Book" to submit
Form includes validation for all fields
Newly added books appear in the browse section

Book Categories
The application supports six categories:

Fiction
Non-Fiction
Sci-Fi
Biography
Mystery
Fantasy

Initial Data
The application comes pre-loaded with 10 books including:

The Great Gatsby
A Brief History of Time
Dune
To Kill a Mockingbird
Sapiens
And more...

Routes

/ - Home page
/books/all - Browse all books
/books/:category - Browse books by specific category
/book/:id - View individual book details
/add-book - Add new book form
* - 404 Not Found page

State Management
The application uses Redux Toolkit for state management:

Store: Centralized state in store.js
Slice: booksSlice manages the books array
Actions: addBook action to add new books to the collection

Form Validation
The Add Book form includes comprehensive validation:

All fields are required except category (has default value)
Rating must be a number between 0 and 5
Error messages display below invalid fields
Form prevents submission if validation fails

Styling

Tailwind CSS utility classes for responsive design
Blue color scheme for navigation and CTAs
Hover effects on interactive elements
Mobile-responsive grid layouts
Clean, modern interface

Browser Compatibility
Works on all modern browsers supporting:

ES6+ JavaScript
React 18+
CSS Grid and Flexbox

Future Enhancements
Potential features to implement:

Edit and delete book functionality
User authentication and personal libraries
Book cover image uploads
Advanced filtering (by rating, author, etc.)
Sorting options (by title, rating, date added)
Reading lists and favorites
Book reviews and comments
Dark mode toggle
Export/import book data
Backend API integration

Dependencies
json{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "redux": "^5.x",
  "@reduxjs/toolkit": "^2.x"
}
Scripts
bashnpm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

License
This project is open source and available under the MIT License.
Contact
For questions or suggestions, please open an issue in the repository.

Built with ❤️ using React, Redux Toolkit, and Tailwind CSS