import { useState } from 'react';
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
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import RecipeCard from '../components/RecipeCard';
import { CategoryWithRecipes } from '../types/category';

// Simüle edilmiş kategori verisi
const [category] = useState<CategoryWithRecipes>({
  id: 1,
  name: 'Ana Yemekler',
  slug: 'ana-yemekler', // eslint-disable-line @typescript-eslint/no-unused-vars
  description: 'Birbirinden lezzetli ana yemek tarifleri',
  image: 'https://via.placeholder.com/400x300',
  recipeCount: 125,
  recipes: [
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
      title: 'Fırında Tavuk',
      image: 'https://via.placeholder.com/300x200',
      duration: '45 dk',
      difficulty: 'Orta',
      rating: 5
    },
    {
      id: 3,
      title: 'Patlıcan Musakka',
      image: 'https://via.placeholder.com/300x200',
      duration: '60 dk',
      difficulty: 'Zor',
      rating: 4
    },
    {
      id: 4,
      title: 'Etli Nohut',
      image: 'https://via.placeholder.com/300x200',
      duration: '90 dk',
      difficulty: 'Orta',
      rating: 5
    },
    {
      id: 5,
      title: 'Karnıyarık',
      image: 'https://via.placeholder.com/300x200',
      duration: '50 dk',
      difficulty: 'Orta',
      rating: 4
    },
    {
      id: 6,
      title: 'İzmir Köfte',
      image: 'https://via.placeholder.com/300x200',
      duration: '45 dk',
      difficulty: 'Orta',
      rating: 5
    }
  ]
});

const CategoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  const filteredAndSortedRecipes = category.recipes
    .filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      // Diğer sıralama seçenekleri eklenebilir
      return 0;
    });

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          position: 'relative',
          height: 200,
          mb: 4,
          borderRadius: 2,
          overflow: 'hidden'
        }}
      >
        <Box
          component="img"
          src={category.image}
          alt={category.name}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.7)'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 3,
            color: 'white'
          }}
        >
          <Typography variant="h3" component="h1">
            {category.name}
          </Typography>
          <Typography variant="subtitle1">
            {category.description}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
        <TextField
          sx={{ flexGrow: 1 }}
          variant="outlined"
          placeholder="Tarif ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormControl sx={{ minWidth: 200 }}>
          <Select
            value={sortBy}
            onChange={handleSortChange}
            displayEmpty
          >
            <MenuItem value="rating">Puana Göre</MenuItem>
            <MenuItem value="newest">En Yeniler</MenuItem>
            <MenuItem value="duration">Hazırlama Süresine Göre</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={3}>
        {filteredAndSortedRecipes.map((recipe) => (
          <Grid item key={recipe.id} xs={12} sm={6} md={4}>
            <RecipeCard {...recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoryDetail;
