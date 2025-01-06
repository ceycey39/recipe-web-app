import { Container, Grid, Typography, Box } from '@mui/material';
import RecipeCard from '../components/RecipeCard';

// Örnek veri
const sampleRecipes = [
  {
    id: 1,
    title: 'Kıymalı Ispanak',
    image: 'https://via.placeholder.com/300x200',
    duration: '30 dk',
    difficulty: 'Kolay',
    rating: 4
  },
  {
    id: 2,
    title: 'Mercimek Çorbası',
    image: 'https://via.placeholder.com/300x200',
    duration: '45 dk',
    difficulty: 'Orta',
    rating: 5
  },
  {
    id: 3,
    title: 'Mantı',
    image: 'https://via.placeholder.com/300x200',
    duration: '60 dk',
    difficulty: 'Zor',
    rating: 5
  },
  {
    id: 4,
    title: 'Karnıyarık',
    image: 'https://via.placeholder.com/300x200',
    duration: '50 dk',
    difficulty: 'Orta',
    rating: 4
  }
];

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Popüler Tarifler
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          En çok beğenilen ve denenmiş lezzetli tarifler
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {sampleRecipes.map((recipe) => (
          <Grid item key={recipe.id} xs={12} sm={6} md={4} lg={3}>
            <RecipeCard {...recipe} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Yeni Eklenen Tarifler
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Son eklenen taze tarifler
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {sampleRecipes.slice(0, 3).map((recipe) => (
          <Grid item key={recipe.id} xs={12} sm={6} md={4}>
            <RecipeCard {...recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
