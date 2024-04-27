import React from 'react';
import Menu from './Menu';
import '../styles.css';

const Layout = ({
  children
}) => (
  <div>
    <Menu />
    <div className='jumbotron mt-5'>
      <h1>Roosevelt island marketplace</h1>
    </div>
    <div className='container-fluid'>{children}</div>
  </div>
);

export default Layout;
