import { Helmet } from 'react-helmet-async';
import { Truck, Users, Map, Smartphone } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Truck,
      title: 'Flotte moderne et diversifiée',
      description: 'Notre parc de véhicules comprend des camions de différentes tailles, adaptés à tous types de marchandises. Tous nos véhicules sont régulièrement entretenus et équipés des dernières technologies de sécurité.',
      details: ['Camions frigorifiques', 'Véhicules légers', 'Semi-remorques', 'Équipement GPS']
    },
    {
      icon: Users,
      title: 'Équipe professionnelle',
      description: 'Notre équipe de chauffeurs et logisticiens est hautement qualifiée et formée aux normes de sécurité les plus strictes. L\'expérience et le professionnalisme sont nos priorités.',
      details: ['Chauffeurs certifiés', 'Formation continue', 'Code de conduite strict', 'Support 24/7']
    },
    {
      icon: Map,
      title: 'Couverture nationale',
      description: 'Nous couvrons l\'ensemble du territoire marocain avec un réseau de partenaires stratégiques. Casablanca est notre base principale, mais nous desservons toutes les régions.',
      details: ['Casablanca et régions', 'Routes optimisées', 'Partenaires locaux', 'Expansion internationale']
    },
    {
      icon: Smartphone,
      title: 'Technologie de suivi',
      description: 'Suivez vos marchandises en temps réel grâce à notre plateforme digitale. Applications mobiles et tableau de bord web pour une visibilité complète sur vos transports.',
      details: ['Suivi GPS temps réel', 'Notifications automatiques', 'Rapports détaillés', 'Application mobile']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pourquoi nous choisir - WM Transport</title>
        <meta name="description" content="Découvrez pourquoi choisir WM Transport : flotte moderne, équipe professionnelle, couverture nationale et technologie de suivi avancée à Casablanca." />
      </Helmet>
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Pourquoi nous choisir</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <reason.icon className="text-blue-900 mr-4" size={48} />
                  <h2 className="text-2xl font-semibold">{reason.title}</h2>
                </div>
                <p className="text-gray-700 mb-6">{reason.description}</p>
                <ul className="space-y-2">
                  {reason.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Confiez-nous vos transports</h2>
            <p className="text-lg text-gray-700 mb-8">
              Avec WM Transport, bénéficiez d'un service de qualité supérieure,
              adapté à vos besoins spécifiques en matière de logistique et transport.
            </p>
            <div className="bg-blue-50 p-8 rounded-lg">
              <p className="text-xl font-semibold text-blue-900">
                Plus de 10 ans d'expérience au service de vos marchandises
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;