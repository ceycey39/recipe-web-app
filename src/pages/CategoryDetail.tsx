import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import RecipeCard from '../components/RecipeCard';
import { CategoryWithRecipes } from '../types/category';

const sampleRecipes = [
  {
    id: 1,
    title: 'Köfte',
    image: 'https://via.placeholder.com/400x300',
    description: 'Enfes ev yapımı köfte tarifi',
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    servings: 4,
    rating: 4.5
  },
  {
    id: 2,
    title: 'Patlıcan Musakka',
    image: 'https://via.placeholder.com/400x300',
    description: 'Geleneksel patlıcan musakka tarifi',
    prepTime: 30,
    cookTime: 45,
    totalTime: 75,
    servings: 6,
    rating: 4.8
  },
  {
    id: 3,
    title: 'Karnıyarık',
    image: 'https://via.placeholder.com/400x300',
    description: 'Nefis karnıyarık tarifi',
    prepTime: 25,
    cookTime: 40,
    totalTime: 65,
    servings: 4,
    rating: 4.7
  },
  {
    id: 4,
    title: 'İzmir Köfte',
    image: 'https://via.placeholder.com/400x300',
    description: 'Klasik İzmir köfte tarifi',
    prepTime: 30,
    cookTime: 40,
    totalTime: 70,
    servings: 6,
    rating: 4.9
  },
  {
    id: 5,
    title: 'Tas Kebabı',
    image: 'https://via.placeholder.com/400x300',
    description: 'Geleneksel tas kebabı tarifi',
    prepTime: 40,
    cookTime: 90,
    totalTime: 130,
    servings: 8,
    rating: 4.6
  }
];

const CategoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  
  // Simüle edilmiş kategori verisi
  const [category] = useState<CategoryWithRecipes>({
    id: 1,
    name: 'Ana Yemekler',
    slug: 'ana-yemekler',
    description: 'Birbirinden lezzetli ana yemek tarifleri',
    image: 'https://via.placeholder.com/400x300',
    recipeCount: 125,
    recipes: sampleRecipes
  });

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  // Tarifleri filtrele ve sırala
  const filteredAndSortedRecipes = useMemo(() => {
    let result = [...category.recipes];
    
    // Arama filtrelemesi
    if (searchQuery) {
      result = result.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Sıralama
    result.sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      } else if (sortBy === 'time') {
        return a.totalTime - b.totalTime;
      }
      return 0;
    });
    
    return result;
  }, [category.recipes, searchQuery, sortBy]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {category.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {category.description}
        </Typography>
      </Box>

      {/* Filters */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Tarif Ara"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Sırala</InputLabel>
            <Select
              value={sortBy}
              label="Sırala"
              onChange={handleSortChange}
            >
              <MenuItem value="rating">Puana Göre</MenuItem>
              <MenuItem value="time">Süreye Göre</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Recipe Grid */}
      <Grid container spacing={3}>
        {filteredAndSortedRecipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <RecipeCard {...recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoryDetail;
