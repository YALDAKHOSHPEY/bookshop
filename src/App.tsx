import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CardProvider } from './context/CardContext'; // Changed to match your actual file name
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <CardProvider> {/* Changed to CardProvider to match export */}
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pb-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/book/:id" element={<BookDetails />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CardProvider>
    </Router>
  );
}

export default App;