import { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Chip,
  Avatar,
  IconButton,
  Button,
  Rating,
} from '@mui/material';
import {
  AccessTime,
  Favorite,
  FavoriteBorder,
  Share,
  Print,
} from '@mui/icons-material';
import RecipeIngredients from '../components/RecipeIngredients';
import RecipeSteps from '../components/RecipeSteps';
import CommentList from '../components/comments/CommentList';
import CommentForm from '../components/comments/CommentForm';
import { Comment } from '../types/comment';

// Örnek veri
const sampleRecipe = {
  id: 1,
  title: 'Kıymalı Ispanak',
  description: 'Lezzetli ve besleyici bir ana yemek tarifi. Ispanağın ve kıymanın muhteşem uyumu ile sofranıza lezzet katın.',
  image: 'https://via.placeholder.com/800x400',
  prepTime: '15 dk',
  cookTime: '30 dk',
  difficulty: 'Orta',
  servings: 4,
  rating: 4.5,
  ingredients: [
    { name: 'Ispanak', amount: '500', unit: 'gram' },
    { name: 'Kıyma', amount: '250', unit: 'gram' },
    { name: 'Soğan', amount: '1', unit: 'adet' },
    { name: 'Sarımsak', amount: '2', unit: 'diş' },
    { name: 'Zeytinyağı', amount: '2', unit: 'yemek kaşığı' },
    { name: 'Tuz', amount: '1', unit: 'tatlı kaşığı' },
    { name: 'Karabiber', amount: '1/2', unit: 'tatlı kaşığı' },
  ],
  steps: [
    {
      order: 1,
      description: 'Ispanakları yıkayıp, ayıklayın ve doğrayın.',
      image: 'https://via.placeholder.com/400x300'
    },
    {
      order: 2,
      description: 'Soğanı yemeklik doğrayın, sarımsakları ezin.',
    },
    {
      order: 3,
      description: 'Zeytinyağını tavada kızdırın, soğanları pembeleşene kadar kavurun.',
    },
    {
      order: 4,
      description: 'Kıymayı ekleyip, suyunu çekene kadar kavurun.',
    },
    {
      order: 5,
      description: 'Ispanakları ekleyin, tuz ve karabiberi katıp karıştırın.',
      image: 'https://via.placeholder.com/400x300'
    }
  ],
  author: {
    name: 'Ayşe Yılmaz',
    avatar: 'https://via.placeholder.com/40'
  },
  createdAt: '2024-01-06'
};

// Örnek yorumlar
const sampleComments: Comment[] = [
  {
    id: 1,
    content: 'Harika bir tarif! Ailece çok beğendik.',
    rating: 5,
    createdAt: '2024-01-05T15:30:00Z',
    user: {
      id: 1,
      username: 'Ayşe Y.',
      avatar: 'https://via.placeholder.com/40'
    },
    recipeId: 1
  },
  {
    id: 2,
    content: 'Tarifi birebir uyguladım, çok lezzetli oldu.',
    rating: 4,
    createdAt: '2024-01-04T10:15:00Z',
    user: {
      id: 2,
      username: 'Mehmet K.',
      avatar: 'https://via.placeholder.com/40'
    },
    recipeId: 1
  }
];

const RecipeDetail = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [comments, setComments] = useState<Comment[]>(sampleComments);
  
  const handleCommentSubmit = async (rating: number, content: string) => {
    // Simüle edilmiş yorum ekleme - gerçek uygulamada API çağrısı yapılacak
    const newComment: Comment = {
      id: comments.length + 1,
      content,
      rating,
      createdAt: new Date().toISOString(),
      user: {
        id: 1,
        username: 'Test User',
        avatar: 'https://via.placeholder.com/40'
      },
      recipeId: 1
    };
    
    setComments([newComment, ...comments]);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Üst Bölüm - Başlık ve Görsel */}
      <Paper elevation={0} sx={{ mb: 4, bgcolor: 'transparent' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {sampleRecipe.title}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar src={sampleRecipe.author.avatar} sx={{ mr: 1 }} />
          <Typography variant="subtitle1" color="text.secondary">
            {sampleRecipe.author.name}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Rating value={sampleRecipe.rating} readOnly precision={0.5} />
        </Box>

        <Box
          component="img"
          src={sampleRecipe.image}
          alt={sampleRecipe.title}
          sx={{
            width: '100%',
            height: 400,
            objectFit: 'cover',
            borderRadius: 2,
            mb: 2
          }}
        />

        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Chip
            icon={<AccessTime />}
            label={`Hazırlık: ${sampleRecipe.prepTime}`}
          />
          <Chip
            icon={<AccessTime />}
            label={`Pişirme: ${sampleRecipe.cookTime}`}
          />
          <Chip label={`Zorluk: ${sampleRecipe.difficulty}`} color="primary" />
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            onClick={() => setIsFavorite(!isFavorite)}
            color={isFavorite ? 'primary' : 'default'}
          >
            {isFavorite ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
          <IconButton>
            <Share />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
        </Box>

        <Typography variant="body1" paragraph>
          {sampleRecipe.description}
        </Typography>
      </Paper>

      {/* Alt Bölüm - Malzemeler ve Hazırlanış */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <RecipeIngredients
            ingredients={sampleRecipe.ingredients}
            servings={sampleRecipe.servings}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ mb: 2 }}
          >
            Malzemeleri Listele
          </Button>
        </Grid>
        <Grid item xs={12} md={8}>
          <RecipeSteps steps={sampleRecipe.steps} />
        </Grid>
      </Grid>

      {/* Yorumlar bölümü */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Yorumlar ve Değerlendirmeler
        </Typography>
        
        <CommentForm
          recipeId={sampleRecipe.id}
          onCommentSubmit={handleCommentSubmit}
        />
        
        <CommentList comments={comments} />
      </Box>
    </Container>
  );
};

export default RecipeDetail;
