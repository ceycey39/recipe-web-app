import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Restaurant } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Category } from '../types/category';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-4px)',
          transition: 'transform 0.2s ease-in-out',
          boxShadow: (theme) => theme.shadows[4]
        }
      }}
      onClick={() => navigate(`/category/${category.slug}`)}
    >
      <CardMedia
        component="img"
        height="160"
        image={category.image}
        alt={category.name}
        sx={{
          objectFit: 'cover',
          filter: 'brightness(0.8)'
        }}
      />
      <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
        <Typography gutterBottom variant="h6" component="div">
          {category.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {category.description}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <Restaurant fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {category.recipeCount} Tarif
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
