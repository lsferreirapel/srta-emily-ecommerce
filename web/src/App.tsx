/* React imports */
import React from 'react';

/* APIs import */
import { BrowserRouter } from 'react-router-dom';

/* My routes */
import Routes from './routes';

/* Global style */
import GlobalStyles from './styles/global';
import '@brainhubeu/react-carousel/lib/style.css';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default App;
