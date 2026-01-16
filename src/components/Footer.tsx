import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-400 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">WM Transport</h3>
            <p className="text-gray-300">
              Société marocaine spécialisée dans le transit, le transport et les solutions logistiques internationale.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex items-center mb-2">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-gray-300">
                5ᵉ étage, Appartement n°503<br />
                Immeuble B<br />
                Angle Boulevard Aït Ba Amrane & Rue Mohamed V<br />
                Roches Noires – Casablanca, Maroc 🇲🇦
              </span>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-gray-300">+212668798515</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-gray-300">commercial@wmtransport.ma</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/logo.webp" alt="WM Transport" className="h-12 w-auto mr-4" />
              <p className="text-yellow-400">&copy; 2026 WM Transport. Tous droits réservés.</p>
            </div>
            <p className="text-yellow-400 text-sm">
              <a href="/privacy" className="hover:text-yellow-300 transition-colors">Politique de Confidentialité</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;