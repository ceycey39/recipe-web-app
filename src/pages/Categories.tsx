import { Container, Grid, Typography, Box, TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useState } from 'react';
import CategoryCard from '../components/CategoryCard';
import { Category } from '../types/category';

// Örnek kategori verileri
const sampleCategories: Category[] = [
  {
    id: 1,
    name: 'Ana Yemekler',
    image: 'https://via.placeholder.com/400x300',
    description: 'Birbirinden lezzetli ana yemek tarifleri',
    recipeCount: 125,
    slug: 'ana-yemekler'
  },
  {
    id: 2,
    name: 'Çorbalar',
    image: 'https://via.placeholder.com/400x300',
    description: 'Sıcacık çorba tarifleri',
    recipeCount: 45,
    slug: 'corbalar'
  },
  {
    id: 3,
    name: 'Tatlılar',
    image: 'https://via.placeholder.com/400x300',
    description: 'Enfes tatlı tarifleri',
    recipeCount: 80,
    slug: 'tatlilar'
  },
  {
    id: 4,
    name: 'Salatalar',
    image: 'https://via.placeholder.com/400x300',
    description: 'Sağlıklı ve lezzetli salata tarifleri',
    recipeCount: 60,
    slug: 'salatalar'
  },
  {
    id: 5,
    name: 'Kahvaltılıklar',
    image: 'https://via.placeholder.com/400x300',
    description: 'Güne güzel başlamak için kahvaltılık tarifler',
    recipeCount: 55,
    slug: 'kahvaltiliklar'
  },
  {
    id: 6,
    name: 'Mezeler',
    image: 'https://via.placeholder.com/400x300',
    description: 'Sofralarınızı renklendirecek meze tarifleri',
    recipeCount: 70,
    slug: 'mezeler'
  },
  {
    id: 7,
    name: 'İçecekler',
    image: 'https://via.placeholder.com/400x300',
    description: 'Serinleten içecek tarifleri',
    recipeCount: 30,
    slug: 'icecekler'
  },
  {
    id: 8,
    name: 'Hamur İşleri',
    image: 'https://via.placeholder.com/400x300',
    description: 'Nefis hamur işi tarifleri',
    recipeCount: 90,
    slug: 'hamur-isleri'
  }
];

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = sampleCategories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Yemek Kategorileri
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          İstediğiniz kategoriden binlerce tarife ulaşın
        </Typography>
        
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Kategori ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mt: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Grid container spacing={3}>
        {filteredCategories.map((category) => (
          <Grid item key={category.id} xs={12} sm={6} md={4} lg={3}>
            <CategoryCard category={category} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Categories;
