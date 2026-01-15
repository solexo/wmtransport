import { Helmet } from 'react-helmet-async';
import { User } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>À propos WM Transport Maroc - Transit Transport International Casablanca</title>
        <meta name="description" content="WM Transport Maroc Casablanca - Société spécialisée transit douane transport international maritime aérien routier. Plus de 10 ans d'expérience logistique Maroc." />
        <meta name="keywords" content="wm transport maroc, entreprise transport casablanca, transit maroc, transport international maroc, logistique casablanca, douane maroc" />
        <link rel="canonical" href="https://wmtransport.ma/about" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">À propos de WM Transport</h1>

        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Notre entreprise</h2>
            <p className="text-gray-600 mb-4">
              <strong>Bienvenue à WM Transport</strong>
            </p>
            <p className="text-gray-600 mb-4">
              WM Transport est une société de transport International, national et de négoce. Son objectif est de fournir le meilleur service possible pour chaque client et sur chaque dossier. Nous comprenons que la satisfaction de notre client dépend de notre capacité de respecter nos engagements d'une façon professionnelle et sûre, aussi nous fournissons un service personnalisé pour chaque client.
            </p>
            <p className="text-gray-600 mb-4">
              Nous offrons les services suivants pour adapter vos besoins d'affaires :
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Un transport International : maritime, routier et aérien</li>
              <li>Un transport International groupage et/ou complet</li>
              <li>Transit : dédouanement de marchandises importées et/ou exportées</li>
              <li>Transport national de marchandises groupage et/ou complets</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Notre personnel est expérimenté et bien informé dans tous les aspects de transport de fret. Avec notre mise à niveau élevé du service, nous nous plaçons indépendamment des autres forwarders.
            </p>
            <p className="text-gray-600 mb-4">
              Basée à Casablanca, nous accompagnons les entreprises marocaines et internationales dans leurs opérations logistiques avec des solutions fiables, rapides et conformes aux normes internationales.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Informations légales</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="mb-2"><strong>Forme juridique :</strong> SARL à Associé Unique</p>
                  <p className="mb-2"><strong>Capital :</strong> 100 000 MAD</p>
                  <p className="mb-2"><strong>RC :</strong> 213897</p>
                  <p className="mb-2"><strong>ICE :</strong> 000160023000050</p>
                </div>
                <div>
                  <p className="mb-2"><strong>Siège social :</strong> Casablanca, Maroc</p>
                  <p className="mb-2"><strong>Secteur :</strong> Transport & Logistique</p>
                  <p className="mb-2"><strong>Création :</strong> 2014</p>
                  <p className="mb-2"><strong>Effectif :</strong> 25+ employés</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Nos réalisations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-3xl font-bold text-yellow-600 mb-2">500+</div>
                <div className="text-gray-700">Clients actifs</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-3xl font-bold text-yellow-600 mb-2">10k+</div>
                <div className="text-gray-700">Expéditions par an</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-3xl font-bold text-yellow-600 mb-2">25+</div>
                <div className="text-gray-700">Pays desservis</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-3xl font-bold text-yellow-600 mb-2">98%</div>
                <div className="text-gray-700">Taux de satisfaction</div>
              </div>
            </div>
          </section>


          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Mission & Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-600">Notre Mission</h3>
                <p className="text-gray-600">
                  Fournir des services logistiques de haute qualité, sécurisés et efficaces, en accompagnant nos clients dans leurs opérations d'import/export avec une expertise reconnue en matière de transit et de dédouanement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-600">Notre Vision</h3>
                <p className="text-gray-600">
                  Devenir le partenaire logistique de référence au Maroc, reconnu pour notre fiabilité, notre rapidité d'exécution et notre conformité aux standards internationaux.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-yellow-600">Fiabilité</h3>
                <p className="text-gray-600 text-sm">Engagements tenus et délais respectés dans toutes nos opérations.</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-yellow-600">Rapidité</h3>
                <p className="text-gray-600 text-sm">Solutions optimisées pour répondre à vos urgences logistiques.</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-yellow-600">Expertise douanière</h3>
                <p className="text-gray-600 text-sm">Maîtrise parfaite des procédures douanières et réglementaires.</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-yellow-600">Conformité</h3>
                <p className="text-gray-600 text-sm">Respect strict des normes internationales et locales.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Message de la Directrice Générale</h2>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <User className="h-12 w-12 text-yellow-600 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Meriem Bellaoui</h3>
                  <p className="text-gray-600">Directrice Générale - WM Transport</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Chez WM Transport, nous croyons que la logistique est le pilier du commerce international. Notre engagement est d'offrir à nos clients des solutions sur mesure, alliant expertise technique et accompagnement personnalisé. Avec plus de X années d'expérience, nous sommes fiers de contribuer au développement économique du Maroc en facilitant les échanges commerciaux."
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;