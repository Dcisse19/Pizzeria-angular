------ PROJET PIZZERIA DELLA MAMMA -------
La chaîne de restaurants Pizzeria Della Mamma souhaite automatiser la prise de commande en restaurant. Pour cela, chaque tablée se verra attribuer une tablette au moment de s’installer. Les clients pourront alors créer leur commande et l’envoyer en cuisine directement. Il est important que les clients aient la possibilité de customiser leurs pizzas.

Le projet ne nécessite pas de responsive car il est destiné à une tablette dont les dimensions sont connues.


------ PAGE HOME EFFECTUEE PAR FAMA -------

Les étapes de mon code sont les suivantes :

Importation des bibliothèques et services nécessaires pour le component :
AbstractControl, FormBuilder, FormGroup et Validators depuis @angular/forms

Déclaration de trois propriétés :

tableForm : un objet FormGroup qui va gérer le formulaire du component
submitted : un booléen qui indique si le formulaire a été soumis ou non
selectedTableNumber : le numéro de table sélectionné par l'utilisateur

Définition du constructeur :

formBuilder : un objet FormBuilder qui va nous permettre de construire le formulaire
router : un objet Router qui va nous permettre de naviguer entre les différentes vues de l'application
tableService : un objet TableService qui va nous permettre de stocker le numéro de table sélectionné par l'utilisateur
cartService : un objet CartService qui va nous permettre de gérer le panier de l'utilisateur

Implémentation de la méthode ngOnInit qui sera exécutée à l'initialisation du component :

Initialisation de notre formulaire avec un champ "tableNumber" qui doit être valide s'il est non vide, ne contient pas de lettres et est compris entre 1 et 14
Implémentation de la méthode submitForm qui sera appelée lorsque l'utilisateur soumettra le formulaire :
Définition de la variable submitted à true
Vérification si le formulaire est valide lors de sa soumission
Stockage du numéro de table dans le local storage grâce au service TableService
Redirection vers la page de tous les produits si le formulaire est valide
Implémentation de la méthode validateTableNumber qui est une fonction de validation personnalisée pour vérifier si la saisie ne contient pas de lettres
Implémentation de la méthode validateTableRange qui est une fonction de validation personnalisée pour vérifier si le numéro de table est compris entre 1 et 14
Création de la page Modify-table pour que l'utilisateur puisse modifier le numéro de table en cas d'erreur de saisie tout au long de la commande

Resolution des bugs : 

Problème d'affichage du footer :
Le code initial du footer (footer.component.ts) utilisait la méthode ngOnInit pour détecter la page courante. Cependant, cette méthode n'était appelée qu'au chargement initial de la page, et pas lors de la navigation entre les pages.
La solution a été de réécrire le code du footer en utilisant la méthode subscribe de l'objet Router pour détecter les changements de navigation. Ainsi, la variable hideFooter est mise à jour à chaque changement de page, permettant d'afficher ou masquer le footer en fonction de la page courante.
Outils utilisés : Router, Location

Problème d'affichage du lien "cart" dans le header :
Le code initial du header (header.component.ts) utilisait la méthode ngOnInit pour détecter la page courante et masquer le lien "cart" sur la page "recapitulatif". Cependant, cette méthode n'était appelée qu'au chargement initial de la page, et pas lors de la navigation entre les pages.
La solution a été de réécrire le code du header en utilisant la méthode subscribe de l'objet Router pour détecter les changements de navigation. Ainsi, la variable showCart est mise à jour à chaque changement de page, permettant d'afficher ou masquer le lien "cart" en fonction de la page courante.
Outils utilisés : Router, Location

Problème d'affichage du footer sur la page "products" :
Après la résolution des deux premiers problèmes, le footer était toujours masqué sur la page "products" après la navigation depuis une autre page.
La solution a été de modifier le code de l'AppComponent pour appeler la méthode hideFooter à chaque changement de page, afin de s'assurer que la variable hideFooter est correctement mise à jour pour chaque page.
Outils utilisés : Router, Location

En résumé, les problèmes ont été résolus en réécrivant le code pour utiliser la méthode subscribe de l'objet Router, qui permet de détecter les changements de navigation et de mettre à jour les variables en conséquence. La méthode ngOnInit n'est donc pas adaptée pour détecter les changements de page, car elle n'est appelée qu'au chargement initial de la page.


------- PAGES CUSTOMISATION, PANIER ET RECAPITULATIF EFFECTUEES PAR DIAMBERE ---------

=== CUSTOMISATION ====
L'affichage des ingrédients inclus et des extras consiste en une boucle sur les ingrédients et les extras de ce produit.
Sur cette page, l'utilisateur peut modifier 2 choses : la liste des ingrédients inclus et le choix des extras.
Les ingrédients inclus peuvent être déselectionnés en passant l'attribut isSelected de l'ingrédient à false lorsque l'on appuie dessus. Il change alors de couleur en  appliquant une classe CSS "inactive".

Des ingrédients extras peuvent être ajoutés au produit. La sélection se fait en augmentant ou diminuant la quantité à l'aide des boutons - et +. La quantité de l'extra peut être augmenté tant qu'elle ne dépasse pas la quantité maximale autorisé. 
La quantité est modifié dans le tableau des produits récpetionnés et sert à calculer le prix final du produit.

Le prix final du produit correspond à son prix de base auquel s'ajoute le prix des ingrédients extras sélectionnés multiplié par leur quantité. Le prix est mis à jour dès lors qu'un extra est ajouté ou supprimer.

Une fois la customisation effectuée, le produit en l'état peut être ajouté au panier à l'aide du bouton ajouter au panier.

=== PANIER ===
Le panier est géré à l'aide du service cartService. Ce dernier regroupe 2 attributs principaux, la quantité de produits dans le panier et le prix total du panier. Il regroupe également toutes les méthodes permettant de créer, sauvegarder, récupérer le panier qui contient les produits et leur quantité (interface CartProduct) dans le localStorage. 

Les attributs et les méthodes sont appelées sur les différentes pages. Par exemple, quand on ajoute un produit au panier, on appelle la méthode addProductToCart du cartService. Quand on veut afficher le nombre de produit du panier dans l'en-tête du site, on récupère l'attribut productQuantity du cartService.

=== RECAPITULATIF ===

Une fois le panier validé, les articles du panier sont conservés dans le localStorage pour pouvoir être affiché sur la page récapitulatif. La quantité d'articles dans le panier est cependant remise à zéro car elle n'est pas nécessaire dans le récapitulatif. 

Les informations concernant la table sont récupérées dans le localStorage à l'aide du tableService.

Sur la page de récapitulatif, l'utilisateur a la possibilité de passr une nouvelle commande en revenant à la page d'accueil de sélection du numéro de table. Lorsqu'il appuie sur le lien, tout est remis à zéro. Le panier est vidé dans le localStorage, le numéro de table est aussi supprimé et l'utilisateur est redirigé sur la page d'accueil.