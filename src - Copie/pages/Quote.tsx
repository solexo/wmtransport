import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Quote = () => {
  const whatsappNumber = "212600000000";
  const whatsappMessage = encodeURIComponent("Bonjour, je souhaite demander un devis avec WM Transport.");

  const handleQuote = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Demander un devis - WM Transport</title>
        <meta name="description" content="Demandez un devis gratuit pour vos besoins en transport et logistique à Casablanca. Formulaire simple et rapide." />
      </Helmet>
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl font-bold text-center mb-12">Demandez un devis</h1>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <p className="text-gray-700 mb-6">
                Pour demander un devis personnalisé, contactez-nous directement via WhatsApp.
                Nous vous répondrons rapidement avec une proposition adaptée à vos besoins.
              </p>
              <button
                onClick={handleQuote}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Demander un devis via WhatsApp
              </button>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Pourquoi demander un devis ?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Évaluation précise de vos besoins en transport international
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Proposition tarifaire compétitive et transparente
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Conseils personnalisés pour optimiser vos chaînes logistiques
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Accompagnement complet de l'import/export
                </li>
              </ul>
            </div>

            <div className="mt-8 text-center text-gray-600">
              <p>Nous vous répondrons dans les 24 heures avec une offre détaillée.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;