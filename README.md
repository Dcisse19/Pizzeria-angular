Page Home effectuée par Fama


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
