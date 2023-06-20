import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Product } from '@Common/interfaces';
import { Button } from '@mui/material';
import { formatCurrency } from '@Utilities';

interface ProductProps {
  data: Product;
}

export default function RecipeReviewCard({ data }: ProductProps) {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        component="img"
        height="194"
        image={data.image_url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">{formatCurrency(data.price)}</Typography>
        <Typography gutterBottom variant="h5" component="div">{data.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button fullWidth>Add to Cart</Button>
        <Button fullWidth>Buy now</Button>
      </CardActions>
    </Card>
  );
}