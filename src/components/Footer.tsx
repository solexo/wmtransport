import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">WM Transport</h3>
            <p className="text-gray-300">
              Société marocaine spécialisée dans le transit, le transport et la logistique internationale.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations légales</h3>
            <p className="text-gray-300">
              SARL à Associé Unique<br />
              Capital : 100 000 MAD<br />
              RC : 213897<br />
              ICE : 000160023000050
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
              <span className="text-gray-300">+212.678.676.295</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-gray-300">wm1transport@gmail.com<br />commercial@wmtransport.ma</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-300 mb-2">&copy; 2024 WM Transport. Tous droits réservés.</p>
          <p className="text-gray-400 text-sm">
            <a href="/privacy" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;