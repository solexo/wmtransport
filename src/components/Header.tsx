import { Link } from 'react-router-dom';
import { Truck, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <img src="/logo.webp" alt="WM Transport" className="h-16 w-auto object-contain" />
        </Link>
        <nav className="hidden md:flex space-x-2">
          <Link to="/" className="px-4 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-blue-600 transition-all duration-300 font-medium">Accueil</Link>
          <Link to="/about" className="px-4 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-blue-600 transition-all duration-300 font-medium">À propos</Link>
          <Link to="/services" className="px-4 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-blue-600 transition-all duration-300 font-medium">Services</Link>
          <Link to="/contact" className="px-4 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-blue-600 transition-all duration-300 font-medium">Contact</Link>
          <Link to="/privacy" className="px-4 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-blue-600 transition-all duration-300 font-medium">Confidentialité</Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>Accueil</Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>À propos</Link>
            <Link to="/services" className="block text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/privacy" className="block text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>Confidentialité</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;