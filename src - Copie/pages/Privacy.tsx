import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité - WM Transport</title>
        <meta name="description" content="Politique de confidentialité de WM Transport. Nous ne collectons ni ne traçons aucune donnée personnelle." />
      </Helmet>
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-12">Politique de Confidentialité</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Collecte de Données</h2>
              <p className="text-gray-700 mb-4">
                WM Transport s'engage à protéger votre vie privée. Nous ne collectons, ne stockons ni ne traitons aucune donnée personnelle vous concernant.
              </p>
              <p className="text-gray-700 mb-4">
                Notre site web ne utilise pas de cookies, de trackers, d'outils d'analyse ou de toute autre technologie permettant de suivre votre activité en ligne.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Communications</h2>
              <p className="text-gray-700 mb-4">
                Toutes nos communications se font exclusivement via WhatsApp ou téléphone. Nous ne conservons aucun historique de conversation ni de données de contact.
              </p>
              <p className="text-gray-700 mb-4">
                Vos informations sont utilisées uniquement pour répondre à votre demande et ne sont pas stockées dans nos systèmes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Protection des Données</h2>
              <p className="text-gray-700 mb-4">
                WM Transport s'engage à ne jamais partager, vendre ou transmettre vos informations à des tiers.
              </p>
              <p className="text-gray-700 mb-4">
                Nous n'utilisons aucun service tiers qui pourrait collecter des données sur nos utilisateurs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Vos Droits</h2>
              <p className="text-gray-700 mb-4">
                Conformément au RGPD et aux lois sur la protection des données, vous avez le droit de :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Accéder à vos données (bien que nous n'en collections aucune)</li>
                <li>Demander la suppression de vos données</li>
                <li>Vous opposer au traitement de vos données</li>
                <li>Retirer votre consentement à tout moment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-gray-700 mb-4">
                Pour toute question concernant cette politique de confidentialité, contactez-nous via WhatsApp au +212 522 123 456.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
              <p className="text-gray-700 mb-4">
                Cette politique de confidentialité peut être modifiée à tout moment. Les changements seront publiés sur cette page.
              </p>
              <p className="text-gray-700">
                Dernière mise à jour : Décembre 2024
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;