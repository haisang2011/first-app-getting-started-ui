import React, { useEffect } from 'react';
import Navbar from '@Common/navbar';
import ProductItem from './components/ProductItem';

const Home = (props: any) => {
  return (
    <React.Fragment>
      <Navbar />
      <div style={{ padding: 24, background: '#2C3333', border: '1px solid', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </React.Fragment>
  )
}

export default Home;