import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Truck, Ship, Plane, Package, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';

const Home = () => {
  const serviceSlugs = ['transport-routier', 'fret-maritime', 'fret-aerien', 'transit-dedouanement', 'messagerie-manutention', 'import-export'];

  return (
    <>
      <Helmet>
        <title>WM Transport Maroc - Transit Transport International Casablanca | Fret Maritime Aérien Routier</title>
        <meta name="description" content="WM Transport Maroc Casablanca - Transit douane, transport international maritime aérien routier. Déchargement fret logistique Maroc. Service professionnel transit Casablanca 24/7." />
        <meta name="keywords" content="wm transport maroc, transit casablanca, transport international maroc, fret maritime casablanca, transport aérien maroc, douane maroc, logistique internationale casablanca" />
        <link rel="canonical" href="https://wmtransport.ma/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "WM Transport",
            "description": "Société marocaine spécialisée dans le transit, le transport et la solution logistique internationale.",
            "url": "https://wmtransport.ma",
            "logo": "https://wmtransport.ma/logo.webp",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2, Rue Abbass Ibn al Ahnef",
              "addressLocality": "Casablanca",
              "addressRegion": "Grand Casablanca",
              "postalCode": "20000",
              "addressCountry": "MA"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+212668798515",
              "contactType": "customer service",
              "availableLanguage": "French"
            },
            "sameAs": [
              "https://www.linkedin.com/in/meriem-bellaoui-034469396?originalSubdomain=ma"
            ],
            "serviceType": ["Transport routier", "Fret maritime", "Fret aérien", "Transit & dédouanement", "Messagerie", "Logistique"],
            "areaServed": "Maroc"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 animate-bg-slide"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop&crop=center')"
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            WM Transport
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Votre partenaire de confiance en transit et transport international
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            WM Transport est une société marocaine basée à Casablanca, spécialisée dans le transit, le transport national et international, le dédouanement et les solutions logistiques. Depuis notre création, nous accompagnons les entreprises avec des solutions fiables, rapides et conformes aux normes marocaines, en plaçant la satisfaction client au cœur de notre stratégie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://wa.me/212668798515?text=Bonjour%20WM%20Transport%2C%20Je%20souhaite%20vous%20contacter%20pour%20des%20informations."
              className="bg-black hover:bg-gray-800 text-yellow-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Nous contacter
            </a>
            <a
              href="https://wa.me/212668798515?text=Bonjour%20WM%20Transport%2C%20Je%20souhaite%20r%C3%A9server%20un%20rendez-vous."
              className="bg-black hover:bg-gray-800 text-yellow-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Réserver un rendez-vous
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2 text-yellow-400">500+</div>
              <div className="text-yellow-200">Clients satisfaits</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2 text-yellow-400">15+</div>
              <div className="text-yellow-200">Années d'expérience</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2 text-yellow-400">98%</div>
              <div className="text-yellow-200">Taux de satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Nos Services Complets</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services logistiques, conçus pour répondre à tous vos besoins en transport et transit international.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="/trans.png"
                  alt="Transport routier Maroc Casablanca - Transport international terrestre WM Transport"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <Truck className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Transport routier</h3>
              <p className="text-gray-600 mb-4">National et international, sécurisé et ponctuel avec suivi GPS en temps réel.</p>
              <Link to={`/services#${serviceSlugs[0]}`} className="inline-flex items-center px-4 py-2 bg-black text-yellow-400 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium">En savoir plus</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="/fret.jpg"
                  alt="Fret maritime Maroc Casablanca - Transport conteneurs maritimes WM Transport"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <Ship className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fret maritime</h3>
              <p className="text-gray-600 mb-4">Solutions complètes pour le transport maritime de conteneurs avec gestion portuaire.</p>
              <Link to={`/services#${serviceSlugs[1]}`} className="inline-flex items-center px-4 py-2 bg-black text-yellow-400 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium">En savoir plus</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop&crop=center"
                  alt="Fret aérien Maroc Casablanca - Transport aérien international WM Transport"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <Plane className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fret aérien</h3>
              <p className="text-gray-600 mb-4">Transport aérien rapide et sécurisé pour vos marchandises urgentes.</p>
              <Link to={`/services#${serviceSlugs[2]}`} className="inline-flex items-center px-4 py-2 bg-black text-yellow-400 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium">En savoir plus</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="/transit.jpg"
                  alt="Transit dédouanement Maroc Casablanca - Services douane WM Transport"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <Package className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Transit & dédouanement</h3>
              <p className="text-gray-600 mb-4">Expertise complète en procédures douanières et conformité réglementaire.</p>
              <Link to={`/services#${serviceSlugs[3]}`} className="inline-flex items-center px-4 py-2 bg-black text-yellow-400 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium">En savoir plus</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="/messagerie.jpg"
                  alt="Messagerie manutention Maroc Casablanca - Services logistiques WM Transport"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <Truck className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Messagerie & manutention</h3>
              <p className="text-gray-600 mb-4">Services express de messagerie et manutention spécialisée.</p>
              <Link to={`/services#${serviceSlugs[4]}`} className="inline-flex items-center px-4 py-2 bg-black text-yellow-400 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium">En savoir plus</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="/importexport.jpg"
                  alt="Import export Maroc Casablanca - Services commerciaux internationaux WM Transport"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <ArrowRight className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Import / Export</h3>
              <p className="text-gray-600 mb-4">Conseil complet et accompagnement pour vos opérations commerciales.</p>
              <Link to={`/services#${serviceSlugs[5]}`} className="inline-flex items-center px-4 py-2 bg-black text-yellow-400 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium">En savoir plus</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Pourquoi choisir WM Transport</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Notre engagement envers l'excellence et notre expertise reconnue font de nous le partenaire logistique idéal pour votre entreprise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fiabilité</h3>
              <p className="text-gray-600">Engagements tenus et délais respectés dans 98% de nos opérations.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Rapidité</h3>
              <p className="text-gray-600">Solutions optimisées pour vos urgences logistiques, 24h/24.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expertise douanière</h3>
              <p className="text-gray-600">Équipe d'experts certifiés en procédures douanières internationales.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Conformité</h3>
              <p className="text-gray-600">Respect strict des normes internationales et réglementations locales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Partners */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Nos Partenaires de Transport</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Pour certains de nos services, nous collaborons avec des transporteurs internationaux de renom pour garantir la meilleure qualité et fiabilité.
          </p>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/ups.webp"
                alt="UPS"
                className="h-16 w-auto mx-auto mb-4"
              />
              <p className="text-center text-gray-600 text-sm">Transport express international</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/dhl.webp"
                alt="DHL"
                className="h-16 w-auto mx-auto mb-4"
              />
              <p className="text-center text-gray-600 text-sm">Solutions logistiques globales</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/fedex.webp"
                alt="FedEx"
                className="h-16 w-auto mx-auto mb-4"
              />
              <p className="text-center text-gray-600 text-sm">Fret aérien et terrestre</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Questions fréquentes</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes sur nos services.
          </p>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">Quels sont vos délais de livraison moyens ?</h3>
              <p className="text-gray-600">
                Nos délais varient selon le type de transport : 24-48h pour le routier national, 5-7 jours pour le maritime, et 1-3 jours pour l'aérien. Nous vous communiquons toujours des délais précis lors de l'établissement du devis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">Proposez-vous des assurances cargo ?</h3>
              <p className="text-gray-600">
                Oui, nous proposons des assurances cargo complètes adaptées à la valeur de vos marchandises. Notre équipe vous conseille sur les meilleures options selon vos besoins spécifiques.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">Comment suivre mes expéditions ?</h3>
              <p className="text-gray-600">
                Nous fournissons un numéro de suivi (tracking number) pour chaque expédition. Toutes les informations nécessaires sont transmises directement au client pour un suivi optimal de vos marchandises.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">Quels types de marchandises transportez-vous ?</h3>
              <p className="text-gray-600">
                Nous transportons tous types de marchandises : produits manufacturés, matières premières, produits périssables, équipements industriels, produits chimiques, etc. Nous disposons des certifications nécessaires pour les transports spécialisés.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">Proposez-vous des services de dédouanement ?</h3>
              <p className="text-gray-600">
                Absolument. Notre équipe d'experts douaniers gère toutes les formalités : déclarations, paiement des droits, obtention des autorisations nécessaires. Nous maîtrisons les réglementations marocaines et internationales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
