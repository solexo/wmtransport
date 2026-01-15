import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/WM tRANSPOT.webp';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="WM Transport" className="h-24 w-auto" />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-cyan-400 transition duration-300 hover:shadow-lg hover:shadow-cyan-400/50">Accueil</Link>
          <Link to="/a-propos" className="text-white hover:text-cyan-400 transition duration-300 hover:shadow-lg hover:shadow-cyan-400/50">À propos</Link>
          <Link to="/services" className="text-white hover:text-cyan-400 transition duration-300 hover:shadow-lg hover:shadow-cyan-400/50">Services</Link>
          <Link to="/pourquoi-nous" className="text-white hover:text-cyan-400 transition duration-300 hover:shadow-lg hover:shadow-cyan-400/50">Pourquoi nous</Link>
          <Link to="/devis" className="text-white hover:text-cyan-400 transition duration-300 hover:shadow-lg hover:shadow-cyan-400/50">Devis</Link>
          <Link to="/contact" className="text-white hover:text-cyan-400 transition duration-300 hover:shadow-lg hover:shadow-cyan-400/50">Contact</Link>
        </nav>
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black px-4 py-2 border-t border-gray-700">
          <Link to="/" className="block py-2 hover:text-blue-300" onClick={toggleMenu}>Accueil</Link>
          <Link to="/a-propos" className="block py-2 hover:text-blue-300" onClick={toggleMenu}>À propos</Link>
          <Link to="/services" className="block py-2 hover:text-blue-300" onClick={toggleMenu}>Services</Link>
          <Link to="/pourquoi-nous" className="block py-2 hover:text-blue-300" onClick={toggleMenu}>Pourquoi nous</Link>
          <Link to="/devis" className="block py-2 hover:text-blue-300" onClick={toggleMenu}>Devis</Link>
          <Link to="/contact" className="block py-2 hover:text-blue-300" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;