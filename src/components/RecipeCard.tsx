import { Card, CardContent, CardMedia, Typography, CardActions, IconButton, Chip, Box } from '@mui/material';
import { Favorite, AccessTime, Star } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface RecipeCardProps {
  id: number;
  title: string;
  image: string;
  duration: string;
  difficulty: string;
  rating: number;
}

const RecipeCard = ({ id, title, image, duration, difficulty, rating }: RecipeCardProps) => {
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
        height="200"
        image={image}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
          <Chip
            icon={<AccessTime sx={{ fontSize: 16 }} />}
            label={duration}
            size="small"
          />
          <Chip
            label={difficulty}
            size="small"
            color="primary"
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              sx={{
                color: index < rating ? 'primary.main' : 'grey.300',
                fontSize: 20
              }}
            />
          ))}
        </Box>
      </CardContent>
      <CardActions disableSpacing onClick={(e) => e.stopPropagation()}>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
