import { FiShoppingCart } from 'react-icons/fi';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">فروشگاه کتاب</Link>
        <Link to="/cart" className="relative">
          <FiShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;