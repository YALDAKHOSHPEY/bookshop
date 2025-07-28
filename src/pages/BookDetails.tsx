import { useParams, Link } from 'react-router-dom';
import { books } from '../data/booksData';
import { useCart } from '../context/CardContext'; // Changed to useCart hook
import { Book } from '../types/bookTypes';

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  // Correct usage of the useCart hook
  const { addToCart } = useCart(); // Now properly using the hook

  const book = books.find(book => book.id === parseInt(id || ''));
  
  if (!book) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <div className="text-2xl font-bold text-red-500">Book not found</div>
        <Link 
          to="/"
          className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
        >
          Return to store
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img 
            src={book.image} 
            alt={book.title} 
            className="w-full rounded-lg shadow-md"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/placeholder-book.jpg';
            }}
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-gray-600 mb-2">Author: {book.author}</p>
          {book.category && (
            <p className="text-gray-600 mb-2">Category: {book.category}</p>
          )}
          <p className="text-2xl font-bold text-blue-600 mb-4">
            ${book.price.toFixed(2)}
          </p>
          <p className="mb-6">{book.description}</p>
          <button
            onClick={() => addToCart(book)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            aria-label={`Add ${book.title} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;