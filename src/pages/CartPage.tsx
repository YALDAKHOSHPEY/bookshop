import { useContext } from 'react';
import { useCart } from '../context/CardContext'; // تغییر به useCart سفارشی
import { Link } from 'react-router-dom';
import type { CartItem } from '../types/bookTypes'; // اضافه کردن import نوع

const CartPage = () => {
  // استفاده از useCart به جای useContext مستقیم
  const { 
    cartItems, 
    removeFromCart, 
    clearCart,
    totalItems,
    totalPrice
  } = useCart(); // این خط تغییر کرد

  if (totalItems === 0) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">سبد خرید شما خالی است</h2>
        <Link 
          to="/" 
          className="text-blue-600 hover:text-blue-800"
        >
          بازگشت به فروشگاه
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">سبد خرید ({totalItems} محصول)</h2>
      
      <div className="grid gap-6">
        {cartItems.map((item: CartItem) => ( // اضافه کردن نوع صریح
          <div key={item.id} className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-24 h-32 object-cover rounded"
              onError={(e) => (e.currentTarget.src = '/placeholder.jpg')} // مدیریت خطای تصویر
            />
            <div className="flex-1">
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.author}</p>
              <p className="text-blue-600 font-bold">
                {item.price.toLocaleString('fa-IR')} تومان × {item.quantity}
              </p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
                aria-label="حذف از سبد خرید"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold">جمع کل:</span>
          <span className="text-xl font-bold text-blue-600">
            {totalPrice.toLocaleString('fa-IR')} تومان
          </span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            پاک کردن سبد
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            پرداخت
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;