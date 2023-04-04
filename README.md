# SportMotor
Connexion
Pour le formulaire de connexion, suivez les étapes suivantes :

Créer un formulaire de connexion avec les champs nom d'utilisateur et mot de passe.
Afficher le bouton "Me connecter" uniquement si les champs nom d'utilisateur et mot de passe sont remplis.
En cliquant sur "Me connecter", chercher l'utilisateur correspondant dans un fichier json.
Si l'utilisateur correspond, enregistrer son id dans un cookie de session.
Si aucun utilisateur ne correspond, afficher un message d'erreur correspondant en popup (popup qui disparaît en cliquant dessus).
Afficher une liste d'articles
Pour afficher une liste d'articles, suivez les étapes suivantes :

Afficher une liste d'articles avec une photo, un titre, une catégorie et un prix pour chaque article.
Permettre d'afficher uniquement les articles correspondant à un prix maximum ou minimum.
Afficher uniquement les articles des catégories sélectionnées.
Afficher uniquement les articles dont le titre contient un terme recherché.
Toutes ces recherches sont complémentaires et les filtres sont dynamiques (click sur une catégorie, terme à rechercher dans le titre, etc.).
Remplir le panier
Pour remplir le panier, suivez les étapes suivantes :

Chaque article est lié à deux boutons "+" ou "-" permettant d'incrémenter ou diminuer le nombre d'articles présents dans le panier.
Le panier est sauvé dans un ou plusieurs cookies.
Un bouton permet d'afficher le panier à tout moment : liste des articles, quantité de chaque article + prix total.
Un bouton permet d'envoyer le contenu du panier au back-end qui vérifie si assez d'articles sont disponibles pour répondre à la commande.
Si le back-end renvoie un succès, vider le panier. Sinon, afficher le message d'erreur.
Côté technique
Le projet doit respecter les critères suivants :

Compréhension des demandes.
Architecture du code (arborescence des fichiers).
Bonne utilisation des techniques vues au cours.
Indentation et clarté du code.
Graphisme et ergonomie.
