export interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
  recipeCount: number;
  slug: string;
}

export interface CategoryWithRecipes extends Category {
  recipes: Array<{
    id: number;
    title: string;
    image: string;
    description: string;
    prepTime: number;
    cookTime: number;
    totalTime: number;
    servings: number;
    rating: number;
  }>;
}