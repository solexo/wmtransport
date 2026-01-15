import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Truck, Package, Wrench, Globe, UserCheck } from 'lucide-react';

const Home = () => {
  const whatsappNumber = "212600000000";
  const whatsappMessage = encodeURIComponent("Bonjour, je souhaite demander un devis avec WM Transport.");

  const handleQuote = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>WM Transport - Transit International et Logistique à Casablanca</title>
        <meta name="description" content="Spécialiste du transit international et logistique à Casablanca. Services fiables pour vos marchandises à l'étranger." />
      </Helmet>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-black text-white py-20" style={{backgroundImage: 'url(/bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transit International et Logistique à Casablanca
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              Spécialiste du Transport International - Fiabilité et Rapidité
            </p>
            <button
              onClick={handleQuote}
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Demandez un devis
            </button>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Truck className="mx-auto mb-4 text-blue-900" size={48} />
                <h3 className="text-xl font-semibold mb-2">Transport International</h3>
                <p className="text-gray-600">Livraison sécurisée de vos marchandises partout au Maroc et à l'étranger.</p>
              </div>
              <div className="text-center">
                <Package className="mx-auto mb-4 text-blue-900" size={48} />
                <h3 className="text-xl font-semibold mb-2">Messagerie et Livraison Express</h3>
                <p className="text-gray-600">Service rapide pour vos colis urgents avec suivi en temps réel.</p>
              </div>
              <div className="text-center">
                <Wrench className="mx-auto mb-4 text-blue-900" size={48} />
                <h3 className="text-xl font-semibold mb-2">Manutention et Chargement</h3>
                <p className="text-gray-600">Équipe spécialisée pour le chargement et déchargement de vos marchandises.</p>
              </div>
              <div className="text-center">
                <Globe className="mx-auto mb-4 text-blue-900" size={48} />
                <h3 className="text-xl font-semibold mb-2">Transit Import/Export</h3>
                <p className="text-gray-600">Solutions complètes pour vos opérations d'importation et exportation.</p>
              </div>
              <div className="text-center">
                <UserCheck className="mx-auto mb-4 text-blue-900" size={48} />
                <h3 className="text-xl font-semibold mb-2">Commissionnaire de Transport</h3>
                <p className="text-gray-600">Gestion administrative et logistique de vos transports.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi nous choisir</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">Fiabilité</h3>
                <p className="text-gray-600">Nous garantissons la sécurité et l'intégrité de vos marchandises.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">Ponctualité</h3>
                <p className="text-gray-600">Livraisons à temps grâce à notre réseau optimisé.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">Sécurité</h3>
                <p className="text-gray-600">Équipe professionnelle et véhicules équipés pour une protection maximale.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Partenaires</h2>
            <p className="text-center text-gray-600 mb-8">
              Nous collaborons avec les leaders mondiaux du transport pour offrir des solutions complètes.
            </p>
            <div className="flex justify-center items-center space-x-8 flex-wrap">
              <div className="text-center">
                <img src="/dhl.webp" alt="DHL" className="h-16 mx-auto mb-2" />
              </div>
              <div className="text-center">
                <img src="/ups.webp" alt="UPS" className="h-16 mx-auto mb-2" />
              </div>
              <div className="text-center">
                <img src="/fedex.webp" alt="FedEx" className="h-16 mx-auto mb-2" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à commencer ?</h2>
            <p className="text-xl mb-8 text-blue-200">
              Contactez-nous pour un devis personnalisé.
            </p>
            <Link
              to="/devis"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
            >
              Demandez un devis
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;