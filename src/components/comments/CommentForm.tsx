import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Rating,
  Typography,
  Paper,
  Alert,
} from '@mui/material';
import { useAuth } from '../../context/AuthContext';

interface CommentFormProps {
  recipeId: number;  // eslint-disable-line @typescript-eslint/no-unused-vars
  onCommentSubmit: (rating: number, content: string) => Promise<void>;
}

const CommentForm = ({ recipeId, onCommentSubmit }: CommentFormProps) => {
  const { isAuthenticated } = useAuth();
  const [content, setContent] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      setError('Yorum yapmak için giriş yapmalısınız.');
      return;
    }

    if (!rating) {
      setError('Lütfen bir puan verin.');
      return;
    }

    if (!content.trim()) {
      setError('Lütfen yorumunuzu yazın.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await onCommentSubmit(rating, content);
      setContent('');
      setRating(null);
    } catch (err) {
      setError('Yorum gönderilirken bir hata oluştu.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Paper elevation={1} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Yorum Yap
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box sx={{ mb: 2 }}>
          <Typography component="legend">Puanınız</Typography>
          <Rating
            name="rating"
            value={rating}
            onChange={(_, newValue) => setRating(newValue)}
            size="large"
          />
        </Box>

        <TextField
          fullWidth
          multiline
          rows={4}
          label="Yorumunuz"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={!isAuthenticated || isSubmitting}
          sx={{ mb: 2 }}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={!isAuthenticated || isSubmitting}
        >
          {isSubmitting ? 'Gönderiliyor...' : 'Yorum Yap'}
        </Button>
      </Box>
    </Paper>
  );
};

export default CommentForm;
