import { Paper, List, ListItem, ListItemText, Typography, Checkbox } from '@mui/material';
import { Ingredient } from '../types/recipe';

interface RecipeIngredientsProps {
  ingredients: Ingredient[];
  servings: number;
}

const RecipeIngredients = ({ ingredients, servings }: RecipeIngredientsProps) => {
  return (
    <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Malzemeler ({servings} kişilik)
      </Typography>
      <List>
        {ingredients.map((ingredient, index) => (
          <ListItem key={index} dense>
            <Checkbox edge="start" />
            <ListItemText
              primary={`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default RecipeIngredients;
