import { Button, ButtonGroup, Typography } from '@mui/material';
import "./orderSummary.scss";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function OrderItem() {
  return (
    <div className='order-summary__cart-item'>
      <div className='order-summary__photo'>
        <img src='https://picsum.photos/200/300' />
      </div>
      <div className='order-summary__wrapper-information'>
        <div className='order-summary__information'>
          <div className='main-information'>
            <Typography variant='h2' className='main-information__product-name'>Relaxed Fit T-Shirt</Typography>
            <Typography variant='h5' className='main-information__price'>$12.99</Typography>
          </div>
          <Typography variant='h3' className='price'>$12.99</Typography>
        </div>
        <div className='order-summary__actions'>
          <div className='quantity'>
            <ButtonGroup>
              <Button>
                <RemoveIcon />
              </Button>
              <Typography className='quantity__text'>1</Typography>
              <Button>
                <AddIcon />
              </Button>
            </ButtonGroup>
          </div>
          <div className='actions'>
            <Button className='actions__delete' variant="text" startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;