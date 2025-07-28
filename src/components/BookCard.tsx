import { Book } from '../types/bookTypes';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CardContext'; // Changed to useCard from CardContext

const BookCard = ({ book }: { book: Book }) => {
  const { addToCart } = useCart(); // Using useCard instead of useCart

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/book/${book.id}`} className="block">
        <img 
          src={book.image} 
          alt={book.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/placeholder-book.jpg';
          }}
        />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1 hover:text-blue-600 transition-colors">
            {book.title}
          </h3>
          <p className="text-gray-600 mb-2">{book.author}</p>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <div className="flex justify-between items-center">
          <span className="font-bold text-blue-600">
            ${book.price.toFixed(2)}
          </span>
          <button 
            onClick={() => addToCart(book)}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
            aria-label={`Add ${book.title} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;