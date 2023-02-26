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

------- PAGE PRODUCTS ET PAGE 404 PAR Lilianna ---------

Les  étapes de mon code sont suivantes:

1.création de la page Products (parent)
2.Création des components:
-product-list  (enfant1) 
-product-card (enfant2)
-tag-button (enfant)
3.création de la page 404 Not-found

Component product-card : 
A/ Decorateur @input () reçoit des données de son parent: page Products, permettant déclarer une propriété d'entrée
pour afficher une liste de produit  avec leurs informations, 
dans une mise en page conforme à la maquette figma,
B/ L’attribut routerLink situé dans la balise <img> redirige sur la page Customize.
C/ Au niveau de la balise prix du produit utilisation du filtre "number" pour formater le prix avec deux décimales après la virgule. Le nombre "1.2" spécifie que le nombre doit être affiché avec un minimum de 1 chiffre avant la décimale et un maximum de 2 chiffres après la décimale.

Component product-list:
Possède une directive *ngFor qui boucle sur un tableau de product-card.

Component tag-button
A/ Decorateur @input () reçoit des données en entrée de son parent: page Products,
B/ Bouton,  lié à l'état de sélection de l'élément via une classe CSS  ".active"qui permet changer la couleur de bouton au click.
C/ La fonction "switchTag()" permet de basculer l'état de sélection de l'élément en inversant sa valeur.
D/  Output() crée une propriété utilisée pour créer un événement "tagName" qui émet un événement à chaque fois qu'un changement se produit dans cette propriété.
Le composant parent qui utilise le composant "TagButtonComponent" peut écouter l'événement "tagName"

=== PAGE PRODUCTS === 
A/ Boucle *ngFor parcourt le tableau "tags" l’affiche des butons de tags
B/  La fonction ‘’setReceivedTags’’ est appelée chaque fois qu'un tag est sélectionné ou désélectionné, et elle ajoute ou supprime le tag de la liste des tags sélectionnés en conséquence.
C/La fonction ‘’getProductsByTag’’est utilisée pour filtrer les produits en fonction des tags sélectionnés. Si des tags sont sélectionnés, elle parcourt chaque catégorie de produits et filtre les produits qui contiennent au moins un des tags sélectionnés. Si aucun tag n'est sélectionné, tous les produits sont affichés.
D/ 2ème boucle *ngFor pour afficher la liste des produits pour chaque catégorie, associé avec la directive *ngIf avec la condition "category.products.length > 0 »,ce qui signifie que l'élément ne sera affiché que si la catégorie a des produits, c'est-à-dire si la longueur de l'array "category.products" est supérieure à zéro. Si la condition est vraie, l'élément sera affiché. Sinon, il sera masqué.

=== PAGE 404 === 
A/ La méthode ngOnInit() est utilisée pour démarrer une animation de rotation en continu d'un élément HTML avec la classe CSS "cheese".
la fonction spin() est appelée dans la méthode ngOnInit() pour démarrer l'animation de rotation en continu.
B/ La fonction spin() utilise setInterval() pour effectuer une rotation de l'élément cheese en ajoutant progressivement des degrés à sa rotation. La fonction réinitialise le nombre de degrés à 0 une fois que la rotation atteint 360 degrés.
C/Le sélecteur de document .querySelector() est utilisé pour trouver l'élément HTML "cheese" dans le DOM, puis le transform CSS est modifié avec la propriété style.transform pour appliquer la rotation.



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

