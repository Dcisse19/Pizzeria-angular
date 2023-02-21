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

export interface IProduct {
  id: number;
  category: ProductCategoryType;
  title: string;
  description: string;
  price: number;
  picture: string;
  includedIngredients: IIncludedIngredient[];
  extras: IExtraIngredient[];
  tags: TagType[];
}

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    category: "pizza",
    title: "Pizza Chicken",
    description:
      "Base crème fraîche, mozzarella, poulet fumé et pommes de terre.",
    price: 900,
    picture: "assets/images/pizzas/pizza-chicken.png",
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
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 2,
          title: "Viande hachée",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 3,
          title: "Champignons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 4,
          title: "Poulet fumé",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 5,
          title: "Chèvre",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 6,
          title: "Boursin",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 7,
          title: "Gorgonzola",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 8,
          title: "Escalope",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 9,
          title: "Kebab",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 10,
          title: "Cordon Bleu",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 11,
          title: "Merguez",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 12,
          title: "Chorizo",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 13,
          title: "Jambon",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 14,
          title: "Lardons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 15,
          title: "Saumon",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 300
      },
      {
        ingredient: {
          id: 16,
          title: "Crevettes",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 300
      },
      {
        ingredient: {
          id: 17,
          title: "Câpres",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 18,
          title: "Anchois",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 19,
          title: "Thon",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 20,
          title: "Herbes de Provence",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 21,
          title: "Olives",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 22,
          title: "Poivrons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 23,
          title: "Maïs",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 24,
          title: "Pomme de terre",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 25,
          title: "Oignons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
    ],
    tags: ["white"]
  },
  {
    id: 2,
    category: "pizza",
    title: "Pizza Orientale",
    description:
      "Base sauce tomate, mozzarella, escalope, viande hachée, merguez et poivrons.",
    price: 900,
    picture: "assets/images/pizzas/pizza-orientale.png",
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
          title: "Escalope"
        },
        isSelected: true,
      },
      {
        ingredient: {
          id: 2,
          title: "Viande hachée"
        },
        isSelected: true,
      },
      {
        ingredient: {
          id: 11,
          title: "Merguez"
        },
        isSelected: true,
      },
      {
        ingredient: {
          id: 22,
          title: "Poivrons"
        },
        isSelected: true,
      }
    ],
    extras: [
      {
        ingredient: {
          id: 1,
          title: "Mozarella",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 2,
          title: "Viande hachée",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 3,
          title: "Champignons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 4,
          title: "Poulet fumé",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 5,
          title: "Chèvre",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 6,
          title: "Boursin",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 7,
          title: "Gorgonzola",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 8,
          title: "Escalope",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 9,
          title: "Kebab",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 10,
          title: "Cordon Bleu",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 11,
          title: "Merguez",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 12,
          title: "Chorizo",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 13,
          title: "Jambon",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 14,
          title: "Lardons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 15,
          title: "Saumon",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 300
      },
      {
        ingredient: {
          id: 16,
          title: "Crevettes",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 300
      },
      {
        ingredient: {
          id: 17,
          title: "Câpres",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 18,
          title: "Anchois",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 19,
          title: "Thon",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 20,
          title: "Herbes de Provence",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 21,
          title: "Olives",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 22,
          title: "Poivrons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 23,
          title: "Maïs",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 24,
          title: "Pomme de terre",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 25,
          title: "Oignons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
    ],
    tags: ["tomato"]
  },
  {
    id: 3,
    category: "pizza",
    title: "Pizza Bolognaise",
    description:
      "Base sauce tomate, mozzarella, viande hachée, champignons et poulet fumé.",
    price: 950,
    picture: "assets/images/pizzas/pizza-bolognaise.png",
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
          title: "Viande hachée"
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
          title: "Champignons"
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
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 2,
          title: "Viande hachée",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 3,
          title: "Champignons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 4,
          title: "Poulet fumé",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 5,
          title: "Chèvre",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 6,
          title: "Boursin",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 7,
          title: "Gorgonzola",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 8,
          title: "Escalope",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 9,
          title: "Kebab",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 10,
          title: "Cordon Bleu",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 11,
          title: "Merguez",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 12,
          title: "Chorizo",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 13,
          title: "Jambon",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 14,
          title: "Lardons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 15,
          title: "Saumon",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 300
      },
      {
        ingredient: {
          id: 16,
          title: "Crevettes",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 300
      },
      {
        ingredient: {
          id: 17,
          title: "Câpres",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 18,
          title: "Anchois",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 19,
          title: "Thon",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 20,
          title: "Herbes de Provence",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 21,
          title: "Olives",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 22,
          title: "Poivrons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 23,
          title: "Maïs",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 24,
          title: "Pomme de terre",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 25,
          title: "Oignons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
    ],
    tags: ["tomato"]
  },
  {
    id: 4,
    category: "pizza",
    title: "Pizza Rio",
    description:
      "Base sauce tomate, mozzarella, viande hachée, champignons et poulet fumé.",
    price: 950,
    picture: "assets/images/pizzas/pizza-rio.png",
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
          title: "Merguez"
        },
        isSelected: true,
      },
      {
        ingredient: {
          id: 22,
          title: "Poivrons"
        },
        isSelected: true,
      },
      {
        ingredient: {
          id: 25,
          title: "Oignons"
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
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 2,
          title: "Viande hachée",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 3,
          title: "Champignons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 4,
          title: "Poulet fumé",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 5,
          title: "Chèvre",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 6,
          title: "Boursin",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 7,
          title: "Gorgonzola",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 8,
          title: "Escalope",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 9,
          title: "Kebab",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 10,
          title: "Cordon Bleu",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 11,
          title: "Merguez",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 12,
          title: "Chorizo",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 13,
          title: "Jambon",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 14,
          title: "Lardons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 15,
          title: "Saumon",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 300
      },
      {
        ingredient: {
          id: 16,
          title: "Crevettes",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 300
      },
      {
        ingredient: {
          id: 17,
          title: "Câpres",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 18,
          title: "Anchois",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 19,
          title: "Thon",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 20,
          title: "Herbes de Provence",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 21,
          title: "Olives",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 22,
          title: "Poivrons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 23,
          title: "Maïs",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 24,
          title: "Pomme de terre",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 25,
          title: "Oignons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
    ],
    tags: ["tomato"]
  },
  {
    id: 5,
    category: "pizza",
    title: "Pizza Quatre Fromages",
    description:
      "Base blanche, mozzarella, chèvre, Gorgonzola et Boursin.",
    price: 950,
    picture: "assets/images/pizzas/pizza-quatre-fromages.png",
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
          title: "Gorgonzola"
        },
        isSelected: true,
      },
      {
        ingredient: {
          id: 5,
          title: "Chèvre"
        },
        isSelected: true,
      },
      {
        ingredient: {
          id: 6,
          title: "Boursin"
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
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 2,
          title: "Viande hachée",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 3,
          title: "Champignons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 4,
          title: "Poulet fumé",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 5,
          title: "Chèvre",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 6,
          title: "Boursin",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 7,
          title: "Gorgonzola",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 8,
          title: "Escalope",
        },
        quantity: 0,
        maxQuantity: 2,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 9,
          title: "Kebab",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 10,
          title: "Cordon Bleu",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 11,
          title: "Merguez",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 12,
          title: "Chorizo",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 13,
          title: "Jambon",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 14,
          title: "Lardons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 15,
          title: "Saumon",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 300
      },
      {
        ingredient: {
          id: 16,
          title: "Crevettes",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 300
      },
      {
        ingredient: {
          id: 17,
          title: "Câpres",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 18,
          title: "Anchois",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 19,
          title: "Thon",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 20,
          title: "Herbes de Provence",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 21,
          title: "Olives",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 22,
          title: "Poivrons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 23,
          title: "Maïs",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 24,
          title: "Pomme de terre",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 25,
          title: "Oignons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
    ],
    tags: ["white"]
  },
  {
    id: 6,
    category: "pizza",
    title: "Pizza Napoltaine",
    description:
      "Base sauce tomate, mozzarella, anchois, olives et câpres.",
    price: 850,
    picture: "assets/images/pizzas/pizza-napolitaine.png",
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
          title: "Anchois"
        },
        isSelected: true,
      },
      {
        ingredient: {
          id: 17,
          title: "Câpres"
        },
        isSelected: true,
      },
      {
        ingredient: {
          id: 21,
          title: "Olives"
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
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 2,
          title: "Viande hachée",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 3,
          title: "Champignons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 4,
          title: "Poulet fumé",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 5,
          title: "Chèvre",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 6,
          title: "Boursin",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 7,
          title: "Gorgonzola",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 8,
          title: "Escalope",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 9,
          title: "Kebab",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 10,
          title: "Cordon Bleu",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 11,
          title: "Merguez",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 12,
          title: "Chorizo",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 13,
          title: "Jambon",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 14,
          title: "Lardons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 15,
          title: "Saumon",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 300
      },
      {
        ingredient: {
          id: 16,
          title: "Crevettes",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 300
      },
      {
        ingredient: {
          id: 17,
          title: "Câpres",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 18,
          title: "Anchois",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 19,
          title: "Thon",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 20,
          title: "Herbes de Provence",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 21,
          title: "Olives",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 22,
          title: "Poivrons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 23,
          title: "Maïs",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 24,
          title: "Pomme de terre",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 25,
          title: "Oignons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
    ],
    tags: ["tomato"]
  },
  {
    id: 7,
    category: "pizza",
    title: "Pizza Margherita",
    description:
      "Base sauce tomate, mozzarella et olives.",
    price: 700,
    picture: "assets/images/pizzas/pizza-margherita.png",
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
          title: "Olives"
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
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 2,
          title: "Viande hachée",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 3,
          title: "Champignons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 4,
          title: "Poulet fumé",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 5,
          title: "Chèvre",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 6,
          title: "Boursin",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 7,
          title: "Gorgonzola",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 8,
          title: "Escalope",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 9,
          title: "Kebab",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 10,
          title: "Cordon Bleu",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 11,
          title: "Merguez",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 12,
          title: "Chorizo",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 13,
          title: "Jambon",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 14,
          title: "Lardons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 15,
          title: "Saumon",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 300
      },
      {
        ingredient: {
          id: 16,
          title: "Crevettes",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 300
      },
      {
        ingredient: {
          id: 17,
          title: "Câpres",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 18,
          title: "Anchois",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 19,
          title: "Thon",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 20,
          title: "Herbes de Provence",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 21,
          title: "Olives",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 22,
          title: "Poivrons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 23,
          title: "Maïs",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 24,
          title: "Pomme de terre",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 25,
          title: "Oignons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
    ],
    tags: ["tomato"]
  },
  {
    id: 8,
    category: "pizza",
    title: "Pizza Veggie",
    description:
      "Base sauce tomate, Champignons, Poivrons, Pomme de terre, Oignons et Olives.",
    price: 900,
    picture: "assets/images/pizzas/pizza-veggie.png",
    includedIngredients: [
      {
        ingredient: {
          id: 3,
          title: "Champignons"
        },
        isSelected: true
      },
      {
        ingredient: {
          id: 22,
          title: "Poivrons"
        },
        isSelected: true,
      },
      {
        ingredient: {
          id: 21,
          title: "Olives"
        },
        isSelected: true,
      },
      {
        ingredient: {
          id: 24,
          title: "Pomme de terre"
        },
        isSelected: true,
      },
      {
        ingredient: {
          id: 25,
          title: "Oignons"
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
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 2,
          title: "Viande hachée",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 3,
          title: "Champignons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 4,
          title: "Poulet fumé",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 5,
          title: "Chèvre",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 6,
          title: "Boursin",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 7,
          title: "Gorgonzola",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 8,
          title: "Escalope",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 9,
          title: "Kebab",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 10,
          title: "Cordon Bleu",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 11,
          title: "Merguez",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 12,
          title: "Chorizo",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 13,
          title: "Jambon",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 14,
          title: "Lardons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 15,
          title: "Saumon",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 300
      },
      {
        ingredient: {
          id: 16,
          title: "Crevettes",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 300
      },
      {
        ingredient: {
          id: 17,
          title: "Câpres",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 18,
          title: "Anchois",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 19,
          title: "Thon",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 200
      },
      {
        ingredient: {
          id: 20,
          title: "Herbes de Provence",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 50
      },
      {
        ingredient: {
          id: 21,
          title: "Olives",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 22,
          title: "Poivrons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 150
      },
      {
        ingredient: {
          id: 23,
          title: "Maïs",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 24,
          title: "Pomme de terre",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
      {
        ingredient: {
          id: 25,
          title: "Oignons",
        },
        quantity: 0,
        maxQuantity: 1,
        additionalPrice: 100
      },
    ],
    tags: ["tomato", "veggie"]
  },
  {
    id: 9,
    category: "drink",
    title: "Coca Cola",
    description: "",
    price: 350,
    picture: "assets/images/drinks/coca-cola.png",
    includedIngredients: [],
    extras: [],
    tags: ["drink"]
  },
  {
    id: 10,
    category: "drink",
    title: "Coca Cola Zéro",
    description: "",
    price: 350,
    picture: "assets/images/drinks/coca-cola-zero.png",
    includedIngredients: [],
    extras: [],
    tags: ["drink"]
  },
  {
    id: 11,
    category: "drink",
    title: "Limonade",
    description: "",
    price: 450,
    picture: "assets/images/drinks/limonade.png",
    includedIngredients: [],
    extras: [],
    tags: ["drink"]
  },
  {
    id: 12,
    category: "dessert",
    title: "Soufflé al Cioccolato",
    description: "Mi cuit au chocolat.",
    price: 690,
    picture: "assets/images/desserts/chocolat.png",
    includedIngredients: [],
    extras: [],
    tags: ["dessert"]
  },
  {
    id: 13,
    category: "dessert",
    title: "Panna cotta",
    description: "Panna cotta , accompagnée d’un coulis aux fruits rouges.",
    price: 690,
    picture: "assets/images/desserts/pannacotta.png",
    includedIngredients: [],
    extras: [],
    tags: ["dessert"]
  },
  {
    id: 14,
    category: "dessert",
    title: "Tiramisu",
    description: "Entremets italien à base de mascarpone, de biscuit, parfumé au café et saupoudré de cacao.",
    price: 690,
    picture: "assets/images/desserts/tiramisu.png",
    includedIngredients: [],
    extras: [],
    tags: ["dessert"]
  }
];
