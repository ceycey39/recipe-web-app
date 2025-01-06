import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface CategoryCardProps {
  id: number;
  name: string;
  slug: string;
  image: string;
  recipeCount: number;
}

const CategoryCard = ({ name, image, slug, recipeCount }: CategoryCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      sx={{ 
        height: '100%', 
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.2s ease-in-out'
        }
      }}
      onClick={() => navigate(`/category/${slug}`)}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            {recipeCount} Tarif
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
