import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

interface ShoppingCartProps {
  numberOfItems?: number;
}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function ShoppingCart(props: ShoppingCartProps) {
  const navigate = useNavigate();
  return (
    <IconButton aria-label="cart" onClick={() => navigate('/shopping-cart')}>
      <StyledBadge badgeContent={props.numberOfItems} color="warning" invisible={props.numberOfItems !== null ? false : true}>
        <ShoppingCartIcon fontSize='large' color='warning' />
      </StyledBadge>
    </IconButton>
  );
}