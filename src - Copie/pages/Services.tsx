import { Helmet } from 'react-helmet-async';
import { Truck, Package, Wrench, Globe, UserCheck, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Transport international de marchandises',
      description: 'Nous assurons le transport de vos marchandises sur tout le territoire marocain et vers l\'international. Notre flotte diversifiée permet de s\'adapter à tous types de cargaisons.',
      benefits: ['Couverture nationale complète', 'Routes internationales optimisées', 'Assurance cargo intégrée', 'Suivi GPS en temps réel']
    },
    {
      icon: Package,
      title: 'Messagerie et livraison express',
      description: 'Service de messagerie rapide pour vos colis urgents. Livraison en 24-48h sur Casablanca et principales villes du Maroc.',
      benefits: ['Livraison express garantie', 'Suivi en ligne', 'Emballage sécurisé', 'Service porte-à-porte']
    },
    {
      icon: Wrench,
      title: 'Manutention, chargement et déchargement',
      description: 'Équipe spécialisée pour toutes vos opérations de manutention. Matériel adapté pour tous types de marchandises.',
      benefits: ['Équipe qualifiée', 'Matériel professionnel', 'Manutention délicate', 'Optimisation des délais']
    },
    {
      icon: Globe,
      title: 'Solutions de transit import/export',
      description: 'Gestion complète de vos opérations d\'importation et exportation. Accompagnement douanier et logistique internationale. Spécialistes du transit international avec des connexions dans tous les ports et aéroports majeurs.',
      benefits: ['Démarches douanières', 'Transit optimisé', 'Conseil réglementaire', 'Suivi documentaire', 'Connexions internationales', 'Gestion des risques']
    },
    {
      icon: UserCheck,
      title: 'Services de commissionnaire de transport',
      description: 'Nous agissons en tant que commissionnaire de transport pour optimiser vos chaînes logistiques et négocier les meilleurs tarifs.',
      benefits: ['Négociation tarifaire', 'Optimisation logistique', 'Gestion administrative', 'Conseil personnalisé']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - WM Transport</title>
        <meta name="description" content="Découvrez nos services de transport : national/international, messagerie express, manutention, transit import/export et commissionnaire de transport à Casablanca." />
      </Helmet>
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Nos Services</h1>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <service.icon className="text-blue-900 mr-4" size={48} />
                    <h2 className="text-2xl font-semibold">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Avantages :</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="text-green-500 mr-2" size={20} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src={`https://via.placeholder.com/400x300/1e3a8a/ffffff?text=${service.title.split(' ')[0]}`}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;