import { Card, CardContent, CardMedia, Typography, Box, Rating } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface RecipeCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
  prepTime: number;
  cookTime: number;
  totalTime: number;
  servings: number;
  rating: number;
}

const RecipeCard = ({ id, title, image, description, prepTime, cookTime, totalTime, rating }: RecipeCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-4px)',
          transition: 'transform 0.2s ease-in-out'
        }
      }}
      onClick={() => navigate(`/recipe/${id}`)}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <AccessTime sx={{ mr: 1, fontSize: 20 }} />
          <Typography variant="body2" color="text.secondary">
            {totalTime} dakika
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Rating value={rating} readOnly size="small" />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({rating}/5)
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
