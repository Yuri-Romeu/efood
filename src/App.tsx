import Hero from './containers/Hero';
import { GlobalCSS } from './styles';

import Footer from './containers/Footer';
import Rotas from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
     return (
          <BrowserRouter>
               <GlobalCSS />
               <Hero />

               <Rotas />
               <Footer />
          </BrowserRouter>
     );
}

export default App;
