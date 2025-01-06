import { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Box,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import CategoryCard from '../components/CategoryCard';
import { Category } from '../types/category';

const categories: Category[] = [
  {
    id: 1,
    name: 'Ana Yemekler',
    slug: 'ana-yemekler',
    description: 'Birbirinden lezzetli ana yemek tarifleri',
    image: 'https://via.placeholder.com/400x300',
    recipeCount: 125
  },
  {
    id: 2,
    name: 'Çorbalar',
    slug: 'corbalar',
    description: 'Sıcacık çorba tarifleri',
    image: 'https://via.placeholder.com/400x300',
    recipeCount: 45
  },
  {
    id: 3,
    name: 'Tatlılar',
    slug: 'tatlilar',
    description: 'Enfes tatlı tarifleri',
    image: 'https://via.placeholder.com/400x300',
    recipeCount: 78
  },
  {
    id: 4,
    name: 'Salatalar',
    slug: 'salatalar',
    description: 'Sağlıklı salata tarifleri',
    image: 'https://via.placeholder.com/400x300',
    recipeCount: 56
  },
  {
    id: 5,
    name: 'Kahvaltılıklar',
    slug: 'kahvaltiliklar',
    description: 'Güne güzel başlamak için kahvaltılık tarifler',
    image: 'https://via.placeholder.com/400x300',
    recipeCount: 92
  },
  {
    id: 6,
    name: 'Atıştırmalıklar',
    slug: 'atistirmaliklar',
    description: 'Pratik atıştırmalık tarifleri',
    image: 'https://via.placeholder.com/400x300',
    recipeCount: 67
  },
  {
    id: 7,
    name: 'İçecekler',
    slug: 'icecekler',
    description: 'Serinleten içecek tarifleri',
    image: 'https://via.placeholder.com/400x300',
    recipeCount: 34
  },
  {
    id: 8,
    name: 'Hamur İşleri',
    slug: 'hamur-isleri',
    description: 'Nefis hamur işi tarifleri',
    image: 'https://via.placeholder.com/400x300',
    recipeCount: 89
  }
];

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Yemek Kategorileri
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Birbirinden lezzetli tarifleri kategorilere göre keşfedin
        </Typography>
      </Box>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Kategori ara..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 4 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <Grid container spacing={3}>
        {filteredCategories.map((category) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
            <CategoryCard
              id={category.id}
              name={category.name}
              slug={category.slug}
              image={category.image}
              recipeCount={category.recipeCount}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Categories;
