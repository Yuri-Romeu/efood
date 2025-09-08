import { GlobalCSS } from './styles';
import Footer from './containers/Footer';
import Rotas from './routes';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store';

function App() {
     return (
          <Provider store={store}>
               <BrowserRouter>
                    <GlobalCSS />

                    <Rotas />
                    <Footer />
               </BrowserRouter>
          </Provider>
     );
}

export default App;
