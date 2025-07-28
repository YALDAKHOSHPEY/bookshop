import BookCard from '../components/BookCard';
import { books } from '../data/booksData';

const Home = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-right">📚 کتاب‌های جدید</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;