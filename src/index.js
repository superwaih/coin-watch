import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import theme from './theme';
import App from './App';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import PriceContextProvider from './context/priceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PriceContextProvider>
      <ChakraProvider>

        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>

    </PriceContextProvider>


  </React.StrictMode>
);


