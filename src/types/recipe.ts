export interface Ingredient {
  name: string;
  amount: string;
  unit: string;
}

export interface Step {
  order: number;
  description: string;
  image?: string;
}

export interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  difficulty: string;
  servings: number;
  rating: number;
  ingredients: Ingredient[];
  steps: Step[];
  author: {
    name: string;
    avatar: string;
  };
  createdAt: string;
}
