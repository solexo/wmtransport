import { Helmet } from 'react-helmet-async';
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact WM Transport Maroc - Transit Transport Casablanca | WhatsApp Téléphone Email</title>
        <meta name="description" content="Contact WM Transport Maroc Casablanca - Transit douane transport international. WhatsApp +212.678.676.295, téléphone, email professionnel Maroc." />
        <meta name="keywords" content="contact wm transport maroc, transit casablanca, transport maroc contact, whatsapp transport casablanca, telephone fret maroc" />
        <link rel="canonical" href="https://wmtransport.ma/contact" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact & Réservation</h1>

        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 p-8 rounded-lg mb-12 text-center">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Questions? Commentaire?</h2>
            <p className="text-gray-600 mb-4 text-lg">Contacter nous sur :</p>
            <p className="text-gray-800 font-semibold mb-2">
              <a href="tel:+212678676295" className="text-blue-600 hover:text-blue-800">+212.678.676.295</a>
            </p>
            <p className="text-gray-600 mb-4">ou envoyez un e-mail sur :</p>
            <p className="text-gray-800 font-semibold">
              <a href="mailto:wm1transport@gmail.com" className="text-blue-600 hover:text-blue-800">wm1transport@gmail.com</a><br />
              <a href="mailto:commercial@wmtransport.ma" className="text-blue-600 hover:text-blue-800">commercial@wmtransport.ma</a>
            </p>
            <div className="mt-6">
              <p className="text-gray-600 mb-2">Suivez-nous sur :</p>
              <a href="https://www.linkedin.com/in/meriem-bellaoui-034469396?originalSubdomain=ma" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Contactez-nous</h2>
            <p className="text-gray-600 text-center mb-8 text-lg">
              Pour un devis rapide et personnalisé, contactez-nous directement via WhatsApp. Aucun formulaire à remplir, communication instantanée et sécurisée.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/212678676295?text=Bonjour%20WM%20Transport%2C%20Je%20souhaite%20vous%20contacter%20pour%20des%20informations."
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center text-lg"
              >
                <MessageCircle className="h-6 w-6 mr-3" />
                Nous contacter
              </a>
              <a
                href="https://wa.me/212678676295?text=Bonjour%20WM%20Transport%2C%20Je%20souhaite%20r%C3%A9server%20un%20rendez-vous."
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center text-lg"
              >
                <MessageCircle className="h-6 w-6 mr-3" />
                Réserver un rendez-vous
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Informations de contact</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Adresse</h3>
                    <p className="text-gray-600">
                      5ᵉ étage, Appartement n°503<br />
                      Immeuble B<br />
                      Angle Boulevard Aït Ba Amrane & Rue Mohamed V<br />
                      Roches Noires – Casablanca, Maroc 🇲🇦
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Téléphone</h3>
                    <p className="text-gray-600"><a href="tel:+212678676295" className="hover:text-blue-800">+212.678.676.295</a></p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600">wm1transport@gmail.com<br />commercial@wmtransport.ma</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Pourquoi WhatsApp ?</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MessageCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <p className="text-gray-600">Communication instantanée et directe</p>
                </div>
                <div className="flex items-start">
                  <MessageCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <p className="text-gray-600">Réponse rapide à vos demandes</p>
                </div>
                <div className="flex items-start">
                  <MessageCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <p className="text-gray-600">Devis personnalisés et adaptés</p>
                </div>
                <div className="flex items-start">
                  <MessageCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <p className="text-gray-600">Suivi en temps réel de vos demandes</p>
                </div>
                <div className="flex items-start">
                  <MessageCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <p className="text-gray-600">Aucune donnée personnelle collectée</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Notre Localisation</h2>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4465907748345!2d-7.608856899999999!3d33.5937153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd7355568b85%3A0x3fd970af2c6806b0!2swm%20transport!5e0!3m2!1sen!2sma!4v1768516503626!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WM Transport Location"
              ></iframe>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Disponible du lundi au vendredi de 8h00 à 18h00, samedi de 9h00 à 12h00
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;