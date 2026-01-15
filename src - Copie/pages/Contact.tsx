import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const whatsappNumber = "212600000000";
  const whatsappMessage = encodeURIComponent("Bonjour, je souhaite contacter WM Transport.");

  const handleContact = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Contact - WM Transport</title>
        <meta name="description" content="Contactez WM Transport à Casablanca. Téléphone, email, adresse et horaires d'ouverture pour vos besoins en transport et logistique." />
      </Helmet>
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Contactez-nous</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Informations de contact</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-blue-900 mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold">Adresse</h3>
                    <p className="text-gray-700">
                      123 Boulevard Mohammed V<br />
                      Casablanca, Maroc<br />
                      20000
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-blue-900 mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold">Téléphone</h3>
                    <p className="text-gray-700">+212 522 123 456</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-blue-900 mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-700">contact@wmtransport.ma</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-blue-900 mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold">Horaires d'ouverture</h3>
                    <p className="text-gray-700">
                      Lundi - Vendredi: 8h00 - 18h00<br />
                      Samedi: 9h00 - 12h00<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Contactez-nous</h2>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <p className="text-gray-700 mb-6">
                  Pour toute demande d'information ou de devis, contactez-nous directement via WhatsApp.
                </p>
                <button
                  onClick={handleContact}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Contacter via WhatsApp
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Notre localisation</h2>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Carte interactive - Casablanca, Maroc</p>
              {/* In a real app, integrate Google Maps or similar */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;