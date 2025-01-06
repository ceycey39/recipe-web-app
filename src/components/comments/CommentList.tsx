import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Rating,
  Paper,
  Divider,
} from '@mui/material';
import { Comment } from '../../types/comment';
import { formatDistanceToNow } from 'date-fns';
import { tr } from 'date-fns/locale';

interface CommentListProps {
  comments: Comment[];
}

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <Paper elevation={1} sx={{ mt: 3 }}>
      <List>
        {comments.map((comment, index) => (
          <div key={comment.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={comment.user.username}
                  src={comment.user.avatar}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    component="div"
                    sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                  >
                    <Typography component="span" variant="subtitle1" fontWeight="bold">
                      {comment.user.username}
                    </Typography>
                    <Rating value={comment.rating} readOnly size="small" />
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                      sx={{ display: 'block', my: 1 }}
                    >
                      {comment.content}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {formatDistanceToNow(new Date(comment.createdAt), {
                        addSuffix: true,
                        locale: tr,
                      })}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            {index < comments.length - 1 && <Divider variant="inset" component="li" />}
          </div>
        ))}
      </List>
    </Paper>
  );
};

export default CommentList;
