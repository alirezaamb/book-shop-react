import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BooksEntity } from '../../types/types';

export default function CardOfBook({ data }: { data: BooksEntity }) {
  const { name, price, imgURL, desc } = data;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="book" height="140" image={imgURL} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">buy</Button>
        <Typography>{price}</Typography>
      </CardActions>
    </Card>
  );
}
