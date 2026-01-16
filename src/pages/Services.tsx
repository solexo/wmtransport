import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { Truck, Ship, Plane, Package, ArrowRight, MessageCircle } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const services = [
    {
      icon: Truck,
      title: 'Transport routier national & international',
      slug: 'transport-routier',
      description: 'L\'entreprise WM Transport est spécialisée dans le transport routier de marchandise en national ou à l\'international. Le transport de votre marchandise peut s\'effectuer par groupage ou par envoi exceptionnel. Transport express de marchandise et messagerie (Intermodal), transport par groupage, par affrètement, température dirigée, départs réguliers.',
      advantages: ['Couverture nationale complète', 'Suivi GPS en temps réel', 'Assurance cargo intégrée', 'Transport express', 'Température dirigée'],
      types: ['Marchandises générales', 'Produits périssables', 'Matériels industriels', 'Transport par groupage', 'Envoi exceptionnel']
    },
    {
      icon: Ship,
      title: 'Fret maritime',
      slug: 'fret-maritime',
      description: 'En ce qui concerne notre service de transport maritime, nous desservons tous les grands ports du Monde et notamment les ports européens à savoir : Anvers - Marseille - Fos - Rouen ou bien Rotterdam. Nous desservons aussi les ports des États Unis - Chine - Canada - Tunisie - Algérie - tous les ports d\'Égypte aussi tous les ports d\'Afrique. Embarquement par les ports d\'Europe les mieux situés : le Havre, Marseille, Anvers, Rotterdam. Envoi de marchandise en groupage, en conventionnel ou en conteneur, positionnement des conteneurs partout au Maroc, formalités douanière et administratives.',
      advantages: ['Réseau de partenaires mondiaux', 'Gestion documentaire complète', 'Optimisation des coûts', 'Couverture mondiale', 'Formalités douanières'],
      types: ['Conteneurs complets (FCL)', 'Groupage maritime (LCL)', 'Transport spécialisé', 'Conventionnel', 'Positionnement Maroc']
    },
    {
      icon: Plane,
      title: 'Fret aérien',
      slug: 'fret-aerien',
      description: 'Notre service de transport aérien international de marchandise, nous desservons toutes les villes, les départs s\'effectuent quotidiennement depuis l\'aéroport de Casablanca pour les différentes destinations du Monde. Des départs quotidiens depuis l\'aéroport de Casablanca, nous sommes en relation avec les grandes compagnies de navigation, un grand respect de marchandise transportée et des délais ultra compétitifs, transport de marchandise fragile et/ou dangereuse.',
      advantages: ['Délais ultra-courts', 'Sécurité maximale', 'Couverture mondiale', 'Départs quotidiens'],
      types: ['Express aérien', 'Marchandises périssables', 'Équipements sensibles', 'Marchandises fragiles']
    },
    {
      icon: Package,
      title: 'Transit & dédouanement',
      slug: 'transit-dedouanement',
      description: 'Expertise complète en procédures douanières et transit international.',
      advantages: ['Équipe d\'experts douaniers', 'Conformité réglementaire', 'Accélération des délais'],
      types: ['Déclaration en douane', 'Transit communautaire', 'Procédures spéciales']
    },
    {
      icon: Truck,
      title: 'Messagerie & manutention',
      slug: 'messagerie-manutention',
      description: 'Services de messagerie express et manutention professionnelle pour tous types de colis.',
      advantages: ['Livraison express', 'Manutention spécialisée', 'Suivi en ligne'],
      types: ['Colis express', 'Documents urgents', 'Échantillons commerciaux']
    },
    {
      icon: ArrowRight,
      title: 'Import / Export & conseil logistique',
      slug: 'import-export',
      description: 'Accompagnement complet pour vos opérations d\'import/export et optimisation logistique.',
      advantages: ['Conseil personnalisé', 'Optimisation des chaînes logistiques', 'Support administratif'],
      types: ['Études de faisabilité', 'Gestion des risques', 'Optimisation des coûts']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services WM Transport Maroc - Transit Transport Fret Casablanca | Maritime Aérien Routier</title>
        <meta name="description" content="Services complets WM Transport Maroc Casablanca : transit douane, transport routier international, fret maritime aérien, messagerie logistique Maroc." />
        <meta name="keywords" content="services transport maroc, transit casablanca, fret maritime maroc, transport aérien casablanca, douane maroc, messagerie logistique, transport routier maroc" />
        <link rel="canonical" href="https://wmtransport.ma/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Services de Transport WM Transport Maroc",
            "description": "Services complets de transit, transport international et logistique au Maroc",
            "provider": {
              "@type": "Organization",
              "name": "WM Transport"
            },
            "serviceType": ["Transport routier", "Fret maritime", "Fret aérien", "Transit & dédouanement", "Messagerie & manutention", "Import/Export"],
            "areaServed": "Maroc"
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Nos Services</h1>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} id={service.slug} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={
                      index === 0 ? "/trans.png" :
                      index === 1 ? "/fret.jpg" :
                      index === 2 ? "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop&crop=center" :
                      index === 3 ? "/transit.jpg" :
                      index === 4 ? "/messagerie.jpg" :
                      "/importexport.jpg"
                    }
                    alt={service.title}
                    className="w-full h-48 md:h-64 object-cover object-center"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-6">
                    <service.icon className="h-16 w-16 text-yellow-400 mr-4" />
                    <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
                  </div>

                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-yellow-400">Avantages clients</h3>
                      <ul className="space-y-2">
                        {service.advantages.map((advantage, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <ArrowRight className="h-4 w-4 text-yellow-400 mr-2" />
                            {advantage}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-yellow-400">Types de marchandises</h3>
                      <ul className="space-y-2">
                        {service.types.map((type, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <Package className="h-4 w-4 text-yellow-400 mr-2" />
                            {type}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="text-center">
                    <a
                      href={`https://wa.me/212668798515?text=Bonjour%20WM%20Transport%2C%20Je%20souhaite%20obtenir%20des%20informations%20%2F%20un%20devis%20pour%20${service.slug === 'transit-dedouanement' ? 'une%20op%C3%A9ration%20de%20d%C3%A9douanement' : `votre%20service%20de%20${service.title.toLowerCase()}`}.`}
                      className="inline-flex items-center bg-black hover:bg-gray-800 text-yellow-400 px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Contact pour ce service
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;