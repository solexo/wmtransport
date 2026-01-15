import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import logo from '../assets/WM tRANSPOT.webp';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="WM Transport" className="h-12 w-auto mb-4" />
            <p className="text-blue-200">
              Votre partenaire en transport et logistique à Casablanca.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-300 transition">Accueil</Link></li>
              <li><Link to="/a-propos" className="hover:text-blue-300 transition">À propos</Link></li>
              <li><Link to="/services" className="hover:text-blue-300 transition">Services</Link></li>
              <li><Link to="/pourquoi-nous" className="hover:text-blue-300 transition">Pourquoi nous</Link></li>
              <li><Link to="/devis" className="hover:text-blue-300 transition">Devis</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300 transition">Contact</Link></li>
              <li><Link to="/confidentialite" className="hover:text-blue-300 transition">Confidentialité</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Casablanca, Maroc</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+212 6XX XXX XXX</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>contact@wmtransport.ma</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>Lun-Ven: 8h-18h</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>&copy; 2026 WM Transport. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;