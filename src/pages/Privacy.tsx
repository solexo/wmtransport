import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité WM Transport Maroc - Protection Données Casablanca</title>
        <meta name="description" content="Politique confidentialité WM Transport Maroc Casablanca - Aucune collecte données personnelles, pas de cookies. Conformité ANRT CNDP Maroc." />
        <meta name="keywords" content="politique confidentialite wm transport maroc, protection donnees casablanca, cookies transport maroc, rgpd maroc, anrt maroc" />
        <link rel="canonical" href="https://wmtransport.ma/privacy" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Politique de Confidentialité</h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Collecte de Données</h2>
            <p className="text-gray-600 mb-4">
              WM Transport s'engage à respecter votre vie privée. Notre site web ne collecte, ne stocke et ne traite aucune donnée personnelle vous concernant.
            </p>
            <p className="text-gray-600 mb-4">
              Nous n'utilisons aucun système de suivi, d'analyse ou de collecte de données. Les seules interactions possibles se font via WhatsApp, téléphone ou email, et ces communications ne sont pas enregistrées sur notre site.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Cookies</h2>
            <p className="text-gray-600 mb-4">
              Notre site web n'utilise aucun cookie. Nous ne plaçons pas de cookies de suivi, publicitaires ou analytiques sur votre navigateur.
            </p>
            <p className="text-gray-600 mb-4">
              Cette politique de non-utilisation de cookies est conforme aux réglementations marocaines et internationales en matière de protection des données.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Conformité Réglementatoire</h2>
            <p className="text-gray-600 mb-4">
              WM Transport respecte les exigences de l'ANRT (Agence Nationale de Réglementation des Télécommunications) et de la CNDP (Commission Nationale de Contrôle de la Protection des Données à Caractère Personnel) du Maroc.
            </p>
            <p className="text-gray-600 mb-4">
              Notre approche minimaliste en matière de collecte de données assure une conformité totale avec :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Loi n°09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel</li>
              <li>Règlementations de l'ANRT concernant les services de communication électronique</li>
              <li>Normes internationales de protection des données (RGPD compatible)</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Communications</h2>
            <p className="text-gray-600 mb-4">
              Toutes nos communications commerciales se font exclusivement via WhatsApp, téléphone ou email direct. Ces canaux ne sont pas surveillés ou enregistrés par des systèmes automatisés sur notre site web.
            </p>
            <p className="text-gray-600 mb-4">
              Pour toute question concernant cette politique, contactez-nous directement via les coordonnées disponibles sur notre page contact.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Modifications</h2>
            <p className="text-gray-600 mb-4">
              Cette politique de confidentialité peut être mise à jour à tout moment. Les modifications seront publiées sur cette page.
            </p>
            <p className="text-gray-600">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-MA')}
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Privacy;