import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';

const Home = () => {
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState([]);

  const loadProductsByArrival = () => {
    getProducts('createdAt').then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
  }, []);

  return (
    <Layout>
      <div className='row'>
        <div className='col-md-1'></div>

        <div className='col-md-10'>
          <h2>Shop second-hand items</h2>
          <div className='row'>
            {productsByArrival.map((product, i) => (
              <div key={i} className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>

        <div className='col-md-1'></div>
      </div>
    </Layout>
  );
};

export default Home;
