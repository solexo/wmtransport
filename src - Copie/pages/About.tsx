import { Helmet } from 'react-helmet-async';
import { Shield, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>À propos - WM Transport</title>
        <meta name="description" content="Découvrez WM Transport, entreprise de logistique à Casablanca. Nos valeurs : fiabilité, ponctualité, sécurité. Plus de 10 ans d'expérience au Maroc." />
      </Helmet>
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">À propos de WM Transport</h1>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Notre entreprise</h2>
            <p className="text-lg text-gray-700 mb-6">
              WM Transport est une entreprise spécialisée dans le transit international et la logistique basée à Casablanca, Maroc.
              Depuis plus de 10 ans, nous sommes le partenaire privilégié pour le transit international, offrant des solutions
              fiables et adaptées aux besoins d'import/export de nos clients.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Notre équipe d'experts met tout en œuvre pour garantir la satisfaction de nos clients,
              en combinant expertise technique, technologie moderne et service personnalisé.
              Nous couvrons l'ensemble du territoire marocain et établissons des connexions internationales
              avec les principaux hubs logistiques mondiaux.
            </p>
            <p className="text-lg text-gray-700">
              Forts de notre expérience dans le secteur, nous avons développé une expertise particulière
              dans la gestion des chaînes logistiques complexes, assurant une traçabilité complète
              et une optimisation des coûts pour nos partenaires commerciaux.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Nos valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="mx-auto mb-4 text-blue-900" size={64} />
                <h3 className="text-2xl font-semibold mb-4">Fiabilité</h3>
                <p className="text-gray-600">
                  Nous nous engageons à respecter nos engagements et à assurer la sécurité de vos marchandises.
                </p>
              </div>
              <div className="text-center">
                <Clock className="mx-auto mb-4 text-blue-900" size={64} />
                <h3 className="text-2xl font-semibold mb-4">Ponctualité</h3>
                <p className="text-gray-600">
                  La ponctualité est au cœur de notre service. Vos délais sont notre priorité.
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="mx-auto mb-4 text-blue-900" size={64} />
                <h3 className="text-2xl font-semibold mb-4">Sécurité</h3>
                <p className="text-gray-600">
                  Sécurité maximale pour vos marchandises grâce à notre équipe formée et nos équipements modernes.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Notre expérience à Casablanca</h2>
            <p className="text-lg text-gray-700 mb-6">
              Implantés au cœur de Casablanca, nous connaissons parfaitement le tissu économique local et les défis logistiques
              de la région. Notre connaissance du terrain nous permet d'optimiser les circuits de transport et de proposer
              des solutions sur mesure pour les entreprises casablancaises.
            </p>
            <p className="text-lg text-gray-700">
              Nous travaillons avec des PME locales comme des grandes entreprises internationales,
              adaptant nos services à leurs besoins spécifiques.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6">Notre vision</h2>
            <p className="text-lg text-gray-700 mb-6">
              WM Transport aspire à devenir le leader de la logistique au Maroc en offrant des services innovants
              et durables. Nous investissons continuellement dans la technologie et la formation de nos équipes
              pour anticiper les évolutions du marché et répondre aux défis environnementaux.
            </p>
            <p className="text-lg text-gray-700">
              Notre objectif : faire de chaque transport une réussite, contribuant ainsi au développement
              économique du Maroc et à la satisfaction de nos clients.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;