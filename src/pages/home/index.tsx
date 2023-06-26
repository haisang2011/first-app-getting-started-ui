import React, { useEffect } from 'react';
import "./home.styles.scss";
import Navbar from '@Common/navbar';
import ProductItem from './components/ProductItem';
import { useProducts } from '@Hooks';
import { RequestMethod } from '@Enums';
import { Box } from '@mui/material';
import Spinner from '@Common/spinner';

const Home = (props: any) => {
  const { data, loading } = useProducts(RequestMethod.GET);

  const renderNoProductData = (<div className='home__no-data'>No Products</div>);

  const renderProducts = () => {
    if (!data) {
      return;
    }

    if (data.length === 0) return renderNoProductData;

    return data.map(product => (
      <Box
        key={product.id}
        sx={{
          mx: 1,
          my: 1.5,
          overflow: 'hidden',
          boxShadow: '0 0 2px 1px rgba(0,0,0,0.2)',
          borderRadius: 3,
        }}
      >
        <ProductItem key={product.id} data={product} />
      </Box>
    ));
  }

  return (
    <React.Fragment>
      <Navbar />
      <div style={{ padding: 24, display: 'flex', flexWrap: 'wrap' }}>
        {loading ? <Spinner wrapperClass='home__spinner' /> : renderProducts()}
      </div>
    </React.Fragment>
  )
}

export default Home;