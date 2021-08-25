import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes/index';

import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;