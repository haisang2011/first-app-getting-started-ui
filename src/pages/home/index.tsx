import React, { useEffect } from 'react';
import Navbar from '@Common/navbar';
import ProductItem from './components/ProductItem';
import { useProducts } from '@Hooks';
import { RequestMethod } from '@Enums';

const Home = (props: any) => {
  const t = useProducts(RequestMethod.GET);

  return (
    <React.Fragment>
      <Navbar />
      <button onClick={t.refetch}>Refetch</button>
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