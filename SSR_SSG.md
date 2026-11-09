# SSR_SSG.md : à compléter

Pour CE catalogue (quelques dizaines de produits, mis à jour occasionnellement) :

1. Choisirais-tu plutôt du SSR, du SSG, ou du pré-rendu ? Justifie en une
   ou deux phrases en t'appuyant sur la fréquence de mise à jour du contenu.

**Réponse :** 
Je choisirais le **SSG (Static Site Generation)**. Étant donné que le catalogue est petit et mis à jour occasionnellement, générer les pages statiques au moment du build offre les meilleures performances de chargement et est idéal pour le SEO, tout en limitant les coûts serveur.

2. Si demain ce site affichait un **stock en temps réel** (quantité
   disponible qui change à chaque commande), ce choix changerait-il ? Pourquoi ?

**Réponse :** 
Oui, il faudrait adapter la stratégie car le SSG pur figerait la donnée de stock lors du build. Pour gérer le temps réel, il faudrait soit passer au **SSR (Server-Side Rendering)** pour récupérer le stock exact côté serveur à chaque visite, soit conserver le SSG pour le SEO mais charger spécifiquement le composant "stock" côté client (CSR via un appel API).