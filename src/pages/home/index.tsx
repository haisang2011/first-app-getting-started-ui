import React, { useEffect } from 'react';
import Navbar from '@Common/navbar';
import ProductItem from './components/ProductItem';
import { useProducts } from '@Hooks';
import { RequestMethod } from '@Enums';
import { Box } from '@mui/material';

const Home = (props: any) => {
  const { data } = useProducts(RequestMethod.GET);

  const renderNoProductData = (<div>No Products</div>);

  const renderProducts = () => {
    if (!data || data.length === 0) {
      return renderNoProductData;
    }

    return data.map(product => (
      <Box
        sx={{
          mx: 1,
          my: 1.5,
          overflow: 'hidden',
          boxShadow: '0 0 2px 1px rgba(0,0,0,0.2)',
          borderRadius: 3,
        }}
      >
        <ProductItem data={product} />
      </Box>
    ));
  }

  return (
    <React.Fragment>
      <Navbar />
      <div style={{ padding: 24, display: 'flex', flexWrap: 'wrap' }}>
        {renderProducts()}
      </div>
    </React.Fragment>
  )
}

export default Home;