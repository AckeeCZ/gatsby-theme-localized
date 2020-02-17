import React from 'react';
import Header from '../Header/Header'

const Layout = ({ children }) => (
    <div>
       <Header /> 
       {children}
    </div>
);

Layout.propTypes = {};

export default Layout;
