import { Container, Grid, Typography, Box } from '@mui/material';
import RecipeCard from '../components/RecipeCard';
import CategoryCard from '../components/CategoryCard';

const featuredRecipes = [
  {
    id: 1,
    title: 'Mantı',
    image: 'https://via.placeholder.com/400x300',
    description: 'Geleneksel Türk mantısı tarifi',
    prepTime: 60,
    cookTime: 30,
    totalTime: 90,
    servings: 6,
    rating: 4.8
  },
  {
    id: 2,
    title: 'Mercimek Çorbası',
    image: 'https://via.placeholder.com/400x300',
    description: 'Enfes mercimek çorbası tarifi',
    prepTime: 10,
    cookTime: 30,
    totalTime: 40,
    servings: 4,
    rating: 4.5
  }
];

const popularRecipes = [
  {
    id: 3,
    title: 'Lahmacun',
    image: 'https://via.placeholder.com/400x300',
    description: 'Ev yapımı lahmacun tarifi',
    prepTime: 30,
    cookTime: 15,
    totalTime: 45,
    servings: 8,
    rating: 4.9
  },
  {
    id: 4,
    title: 'İskender',
    image: 'https://via.placeholder.com/400x300',
    description: 'Enfes İskender tarifi',
    prepTime: 40,
    cookTime: 20,
    totalTime: 60,
    servings: 4,
    rating: 4.7
  }
];

const categories = [
  {
    id: 1,
    name: 'Ana Yemekler',
    slug: 'ana-yemekler',
    image: 'https://via.placeholder.com/400x300',
    recipeCount: 125
  },
  {
    id: 2,
    name: 'Çorbalar',
    slug: 'corbalar',
    image: 'https://via.placeholder.com/400x300',
    recipeCount: 45
  },
  {
    id: 3,
    name: 'Tatlılar',
    slug: 'tatlilar',
    image: 'https://via.placeholder.com/400x300',
    recipeCount: 78
  },
  {
    id: 4,
    name: 'Salatalar',
    slug: 'salatalar',
    image: 'https://via.placeholder.com/400x300',
    recipeCount: 56
  }
];

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Öne Çıkan Tarifler */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Öne Çıkan Tarifler
        </Typography>
        <Grid container spacing={3}>
          {featuredRecipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={6} key={recipe.id}>
              <RecipeCard {...recipe} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Kategoriler */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Kategoriler
        </Typography>
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category.id}>
              <CategoryCard {...category} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Popüler Tarifler */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Popüler Tarifler
        </Typography>
        <Grid container spacing={3}>
          {popularRecipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={6} key={recipe.id}>
              <RecipeCard {...recipe} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
