# REFLEXION.md : à compléter

1. `robots.txt` empêche-t-il, à lui seul, le duplicate content entre
   `/produits?tri=prix` et `/produits?tri=prix-asc` ? Pourquoi ?
   
   **Réponse :** 
   Non, pas du tout. Le fichier `robots.txt` sert uniquement à bloquer l'exploration (le crawl) par les robots de Google. Cependant, si l'URL bloquée reçoit un lien depuis une autre page ou un autre site, Google peut tout à fait l'indexer quand même. Le problème de contenu dupliqué sera donc toujours présent dans les résultats de recherche.

2. Pourquoi la balise canonique est-elle l'outil adapté ici, plutôt que
   `robots.txt` ou une meta `noindex` ?
   
   **Réponse :** 
   La balise canonique est l'outil parfait car elle indique clairement à Google quelle est la "version officielle" à conserver dans son index parmi plusieurs URLs similaires. 
   - Un `robots.txt` empêcherait l'exploration mais pas l'indexation.
   - Un `noindex` demanderait de désindexer purement et simplement la page alternative, ce qui ferait perdre toute la "puissance SEO" de ses éventuels liens. 
   La balise canonique, elle, permet de fusionner la popularité des deux URLs vers l'URL de référence.

3. Si demain `/admin` existe sur ce site et ne doit jamais être exploré par
   Google, quelle ligne ajoutes-tu dans `robots.txt` ?
   
   **Réponse :** 
   Il faut ajouter la consigne suivante (généralement sous la mention `User-agent: *`) :
   `Disallow: /admin/`