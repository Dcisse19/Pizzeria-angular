import { IIngredient } from "./ingredients.mock";

export interface IIncludedIngredient {
  ingredient: IIngredient;
  isSelected: boolean;
}

export interface IExtraIngredient {
  ingredient: IIngredient;
  quantity: number;
  maxQuantity: number;
  additionalPrice: number;
}


export type ProductCategoryType = "pizza" | "drink" | "dessert";

export type TagType = "tomato" | "white" | "drink" | "veggie" | "dessert";

export interface ITag {
  id: number;
  nom: TagType;
  titre: string;
  isSelected: boolean;
 
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: ProductCategoryType;
  picture: string;
  isVisible : boolean;
  includedIngredients: IIncludedIngredient[];
  extras: IExtraIngredient[];
  tags: TagType[];
}

export interface IProductsByCategory {
  id: number;
  category: ProductCategoryType;
  title: string;
  products: IProduct[];
}


export const TAGS: ITag [] = [ 
{
  id: 1,
  nom: "tomato",
  titre: "Base tomate",
  isSelected:false,

},
{
id: 2,
nom: "white",
titre: "Base blanche",
isSelected:false,
},
{
id: 3,
nom:"veggie",
titre: "Veggie",
isSelected:false,
},
{
id: 4,
nom: "dessert",
titre: "Dessert",
isSelected:false,
},
{
id: 5,
nom: "drink",
titre: "Boissons",
isSelected:false,
}] 

export const CATEGORIES: IProductsByCategory[] = [
  {id: 1,
   category: "pizza",
   title: "Les Pizzas della Mama",
   products: []
  },
  {id: 2,
   category: "drink",
   title: "Les Boissons della Mama",
   products: []
  },
  {id: 3,
   category: "dessert",
   title: "Les Desserts della Mama",
   products: []
  },
]

export const PRODUCTS: IProductsByCategory[] = [
  {
    id: 1,
    category: "pizza",
    title: "Les Pizzas della Mama",
    products: [
      {
        id: 1,
        title: "Pizza Chicken",
        description:
          "Base crème fraîche, mozzarella, poulet fumé et pommes de terre.",
        price: 900,
        category: "pizza",
        picture: "assets/images/pizzas/pizza-chicken.png",
        isVisible : true,
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 4,
              title: "Poulet fumé",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 24,
              title: "Pomme de terre",
            },
            isSelected: true,
          },
        ],
        extras: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 2,
              title: "Viande hachée",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 3,
              title: "Champignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 4,
              title: "Poulet fumé",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 5,
              title: "Chèvre",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 6,
              title: "Boursin",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 7,
              title: "Gorgonzola",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 8,
              title: "Escalope",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 9,
              title: "Kebab",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 10,
              title: "Cordon Bleu",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 11,
              title: "Merguez",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 12,
              title: "Chorizo",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 13,
              title: "Jambon",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 14,
              title: "Lardons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 15,
              title: "Saumon",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 300,
          },
          {
            ingredient: {
              id: 16,
              title: "Crevettes",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 300,
          },
          {
            ingredient: {
              id: 17,
              title: "Câpres",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 18,
              title: "Anchois",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 19,
              title: "Thon",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 20,
              title: "Herbes de Provence",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 21,
              title: "Olives",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 22,
              title: "Poivrons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 23,
              title: "Maïs",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 24,
              title: "Pomme de terre",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 25,
              title: "Oignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
        ],
        tags: ["white"],
      },
      {
        id: 2,
        title: "Pizza Orientale",
        description:
          "Base sauce tomate, mozzarella, escalope, viande hachée, merguez et poivrons.",
        price: 900,
        category: "pizza",
        picture: "assets/images/pizzas/pizza-orientale.png",
        isVisible : true,
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 8,
              title: "Escalope",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 2,
              title: "Viande hachée",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 11,
              title: "Merguez",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 22,
              title: "Poivrons",
            },
            isSelected: true,
          },
        ],
        extras: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 2,
              title: "Viande hachée",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 3,
              title: "Champignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 4,
              title: "Poulet fumé",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 5,
              title: "Chèvre",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 6,
              title: "Boursin",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 7,
              title: "Gorgonzola",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 8,
              title: "Escalope",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 9,
              title: "Kebab",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 10,
              title: "Cordon Bleu",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 11,
              title: "Merguez",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 12,
              title: "Chorizo",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 13,
              title: "Jambon",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 14,
              title: "Lardons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 15,
              title: "Saumon",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 300,
          },
          {
            ingredient: {
              id: 16,
              title: "Crevettes",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 300,
          },
          {
            ingredient: {
              id: 17,
              title: "Câpres",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 18,
              title: "Anchois",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 19,
              title: "Thon",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 20,
              title: "Herbes de Provence",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 21,
              title: "Olives",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 22,
              title: "Poivrons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 23,
              title: "Maïs",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 24,
              title: "Pomme de terre",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 25,
              title: "Oignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
        ],
        tags: ["tomato"],
      },
      {
        id: 3,
        title: "Pizza Bolognaise",
        description:
          "Base sauce tomate, mozzarella, viande hachée, champignons et poulet fumé.",
        price: 950,
        category: "pizza",
        picture: "assets/images/pizzas/pizza-bolognaise.png",
        isVisible : true,
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 2,
              title: "Viande hachée",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 4,
              title: "Poulet fumé",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 3,
              title: "Champignons",
            },
            isSelected: true,
          },
        ],
        extras: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 2,
              title: "Viande hachée",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 3,
              title: "Champignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 4,
              title: "Poulet fumé",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 5,
              title: "Chèvre",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 6,
              title: "Boursin",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 7,
              title: "Gorgonzola",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 8,
              title: "Escalope",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 9,
              title: "Kebab",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 10,
              title: "Cordon Bleu",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 11,
              title: "Merguez",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 12,
              title: "Chorizo",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 13,
              title: "Jambon",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 14,
              title: "Lardons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 15,
              title: "Saumon",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 300,
          },
          {
            ingredient: {
              id: 16,
              title: "Crevettes",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 300,
          },
          {
            ingredient: {
              id: 17,
              title: "Câpres",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 18,
              title: "Anchois",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 19,
              title: "Thon",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 20,
              title: "Herbes de Provence",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 21,
              title: "Olives",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 22,
              title: "Poivrons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 23,
              title: "Maïs",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 24,
              title: "Pomme de terre",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 25,
              title: "Oignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
        ],
        tags: ["tomato"],
      },
      {
        id: 4,
        title: "Pizza Rio",
        description:
          "Base sauce tomate, mozzarella, viande hachée, champignons et poulet fumé.",
        price: 950,
        category: "pizza",
        picture: "assets/images/pizzas/pizza-rio.png",
        isVisible : true,
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 11,
              title: "Merguez",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 22,
              title: "Poivrons",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 25,
              title: "Oignons",
            },
            isSelected: true,
          },
        ],
        extras: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 2,
              title: "Viande hachée",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 3,
              title: "Champignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 4,
              title: "Poulet fumé",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 5,
              title: "Chèvre",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 6,
              title: "Boursin",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 7,
              title: "Gorgonzola",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 8,
              title: "Escalope",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 9,
              title: "Kebab",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 10,
              title: "Cordon Bleu",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 11,
              title: "Merguez",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 12,
              title: "Chorizo",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 13,
              title: "Jambon",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 14,
              title: "Lardons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 15,
              title: "Saumon",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 300,
          },
          {
            ingredient: {
              id: 16,
              title: "Crevettes",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 300,
          },
          {
            ingredient: {
              id: 17,
              title: "Câpres",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 18,
              title: "Anchois",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 19,
              title: "Thon",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 20,
              title: "Herbes de Provence",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 21,
              title: "Olives",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 22,
              title: "Poivrons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 23,
              title: "Maïs",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 24,
              title: "Pomme de terre",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 25,
              title: "Oignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
        ],
        tags: ["tomato"],
      },
      {
        id: 5,
        title: "Pizza Quatre Fromages",
        description: "Base blanche, mozzarella, chèvre, Gorgonzola et Boursin.",
        price: 950,
        category: "pizza",
        picture: "assets/images/pizzas/pizza-quatre-fromages.png",
        isVisible : true,
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 7,
              title: "Gorgonzola",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 5,
              title: "Chèvre",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 6,
              title: "Boursin",
            },
            isSelected: true,
          },
        ],
        extras: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 2,
              title: "Viande hachée",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 3,
              title: "Champignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 4,
              title: "Poulet fumé",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 5,
              title: "Chèvre",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 6,
              title: "Boursin",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 7,
              title: "Gorgonzola",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 8,
              title: "Escalope",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 9,
              title: "Kebab",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 10,
              title: "Cordon Bleu",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 11,
              title: "Merguez",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 12,
              title: "Chorizo",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 13,
              title: "Jambon",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 14,
              title: "Lardons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 15,
              title: "Saumon",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 300,
          },
          {
            ingredient: {
              id: 16,
              title: "Crevettes",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 300,
          },
          {
            ingredient: {
              id: 17,
              title: "Câpres",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 18,
              title: "Anchois",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 19,
              title: "Thon",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 20,
              title: "Herbes de Provence",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 21,
              title: "Olives",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 22,
              title: "Poivrons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 23,
              title: "Maïs",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 24,
              title: "Pomme de terre",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 25,
              title: "Oignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
        ],
        tags: ["white"],
      },
      {
        id: 6,
        title: "Pizza Napoltaine",
        description:
          "Base sauce tomate, mozzarella, anchois, olives et câpres.",
        price: 850,
        category: "pizza",
        picture: "assets/images/pizzas/pizza-napolitaine.png",
        isVisible : true,
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 18,
              title: "Anchois",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 17,
              title: "Câpres",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 21,
              title: "Olives",
            },
            isSelected: true,
          },
        ],
        extras: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 2,
              title: "Viande hachée",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 3,
              title: "Champignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 4,
              title: "Poulet fumé",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 5,
              title: "Chèvre",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 6,
              title: "Boursin",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 7,
              title: "Gorgonzola",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 8,
              title: "Escalope",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 9,
              title: "Kebab",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 10,
              title: "Cordon Bleu",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 11,
              title: "Merguez",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 12,
              title: "Chorizo",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 13,
              title: "Jambon",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 14,
              title: "Lardons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 15,
              title: "Saumon",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 300,
          },
          {
            ingredient: {
              id: 16,
              title: "Crevettes",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 300,
          },
          {
            ingredient: {
              id: 17,
              title: "Câpres",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 18,
              title: "Anchois",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 19,
              title: "Thon",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 20,
              title: "Herbes de Provence",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 21,
              title: "Olives",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 22,
              title: "Poivrons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 23,
              title: "Maïs",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 24,
              title: "Pomme de terre",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 25,
              title: "Oignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
        ],
        tags: ["tomato"],
      },
      {
        id: 7,
        title: "Pizza Margherita",
        description: "Base sauce tomate, mozzarella et olives.",
        price: 700,
        category: "pizza",
        picture: "assets/images/pizzas/pizza-margherita.png",
        isVisible : true,
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 21,
              title: "Olives",
            },
            isSelected: true,
          },
        ],
        extras: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 2,
              title: "Viande hachée",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 3,
              title: "Champignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 4,
              title: "Poulet fumé",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 5,
              title: "Chèvre",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 6,
              title: "Boursin",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 7,
              title: "Gorgonzola",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 8,
              title: "Escalope",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 9,
              title: "Kebab",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 10,
              title: "Cordon Bleu",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 11,
              title: "Merguez",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 12,
              title: "Chorizo",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 13,
              title: "Jambon",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 14,
              title: "Lardons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 15,
              title: "Saumon",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 300,
          },
          {
            ingredient: {
              id: 16,
              title: "Crevettes",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 300,
          },
          {
            ingredient: {
              id: 17,
              title: "Câpres",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 18,
              title: "Anchois",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 19,
              title: "Thon",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 20,
              title: "Herbes de Provence",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 21,
              title: "Olives",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 22,
              title: "Poivrons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 23,
              title: "Maïs",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 24,
              title: "Pomme de terre",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 25,
              title: "Oignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
        ],
        tags: ["tomato"],
      },
      {
        id: 8,
        title: "Pizza Veggie",
        description:
          "Base sauce tomate, Champignons, Poivrons, Pomme de terre, Oignons et Olives.",
        price: 900,
        category: "pizza",
        picture: "assets/images/pizzas/pizza-veggie.png",
        isVisible : true,
        includedIngredients: [
          {
            ingredient: {
              id: 3,
              title: "Champignons",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 22,
              title: "Poivrons",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 21,
              title: "Olives",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 24,
              title: "Pomme de terre",
            },
            isSelected: true,
          },
          {
            ingredient: {
              id: 25,
              title: "Oignons",
            },
            isSelected: true,
          },
        ],
        extras: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 2,
              title: "Viande hachée",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 3,
              title: "Champignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 4,
              title: "Poulet fumé",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 5,
              title: "Chèvre",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 6,
              title: "Boursin",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 7,
              title: "Gorgonzola",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 8,
              title: "Escalope",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 9,
              title: "Kebab",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 10,
              title: "Cordon Bleu",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 11,
              title: "Merguez",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 12,
              title: "Chorizo",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 13,
              title: "Jambon",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 14,
              title: "Lardons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 15,
              title: "Saumon",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 300,
          },
          {
            ingredient: {
              id: 16,
              title: "Crevettes",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 300,
          },
          {
            ingredient: {
              id: 17,
              title: "Câpres",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 18,
              title: "Anchois",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 19,
              title: "Thon",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 20,
              title: "Herbes de Provence",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 50,
          },
          {
            ingredient: {
              id: 21,
              title: "Olives",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 22,
              title: "Poivrons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 150,
          },
          {
            ingredient: {
              id: 23,
              title: "Maïs",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 24,
              title: "Pomme de terre",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 25,
              title: "Oignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
        ],
        tags: ["tomato", "veggie"],
      },
    ],
  },
  {
    id: 2,
    category: "drink",
    title: "Les Boissons della Mama",
    products: [
      {
        id: 9,
        title: "Coca Cola",
        description: "",
        price: 350,
        category: "drink",
        picture: "assets/images/drinks/coca-cola.png",
        isVisible : true,
        includedIngredients: [],
        extras: [],
        tags: ["drink"],
      },
      {
        id: 10,
        title: "Coca Cola Zéro",
        description: "",
        price: 350,
        category: "drink",
        picture: "assets/images/drinks/coca-cola-zero.png",
        isVisible : true,
        includedIngredients: [],
        extras: [],
        tags: ["drink"],
      },
      {
        id: 11,
        title: "Limonade",
        description: "",
        price: 450,
        category: "drink",
        picture: "assets/images/drinks/limonade.png",
        isVisible : true,
        includedIngredients: [],
        extras: [],
        tags: ["drink"],
      },
    ],
  },
  {
    id: 3,
    category: "dessert",
    title: "Les Desserts della Mama",
    products: [
      {
        id: 12,
        title: "Soufflé al Cioccolato",
        description: "Mi cuit au chocolat.",
        price: 690,
        category: "dessert",
        picture: "assets/images/desserts/chocolat.png",
        isVisible : true,
        includedIngredients: [],
        extras: [],
        tags: ["dessert"],
      },
      {
        id: 13,
        title: "Panna cotta",
        description: "Panna cotta , accompagnée d’un coulis aux fruits rouges.",
        price: 690,
        category: "dessert",
        picture: "assets/images/desserts/pannacotta.png",
        isVisible : true,
        includedIngredients: [],
        extras: [],
        tags: ["dessert"],
      },
      {
        id: 14,
        title: "Tiramisu",
        description:
          "Entremets italien à base de mascarpone, de biscuit, parfumé au café et saupoudré de cacao.",
        price: 690,
        category: "dessert",
        picture: "assets/images/desserts/tiramisu.png",
        isVisible : true,
        includedIngredients: [],
        extras: [],
        tags: ["dessert"],
      },
    ],
  },
];
