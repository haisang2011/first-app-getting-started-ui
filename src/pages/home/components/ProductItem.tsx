import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Product } from '@Common/interfaces';
import { Button } from '@mui/material';
import { formatCurrency } from '@Utilities';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useAddCartItem } from '@Hooks';
import CartContext from '@Context/cart.context';
import "./productItem.styles.scss";

interface ProductProps {
  data: Product;
}

function ProductItem({ data }: ProductProps) {
  const { getCartDataFromApi } = React.useContext(CartContext);
  const { refetch: addToCart } = useAddCartItem({ product_id: data.id });

  const onAddToCart = () => addToCart().then(() => getCartDataFromApi());

  return (
    <Card sx={{ maxWidth: 320 }} className='card'>
      <LazyLoadImage
        className='card__image'
        src={data.image_url}
        placeholderSrc='https://placehold.co/600x400'
        width={320} height={200}
        alt="Image Alt"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">{formatCurrency(data.price)}</Typography>
        <Typography gutterBottom variant="h5" component="div">{data.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {data.short_description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button fullWidth onClick={onAddToCart}>Add to Cart</Button>
        <Button fullWidth>Buy now</Button>
      </CardActions>
    </Card>
  );
}

export default ProductItem;