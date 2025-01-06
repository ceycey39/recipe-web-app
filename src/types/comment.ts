export interface Comment {
  id: number;
  content: string;
  rating: number;
  createdAt: string;
  user: {
    id: number;
    username: string;
    avatar?: string;
  };
  recipeId: number;
}
