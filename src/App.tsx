import { GlobalCSS } from './styles';
import Footer from './containers/Footer';
import Rotas from './routes';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store';
import Cart from './Components/Cart';
import { Toaster } from 'react-hot-toast';

function App() {
     return (
          <Provider store={store}>
               <BrowserRouter>
                    <GlobalCSS />
                    <Toaster
                         position="top-center"
                         toastOptions={{
                              style: {
                                   background: '#333',
                                   color: '#fff',
                              },
                         }}
                    />

                    <Rotas />
                    <Cart />
                    <Footer />
               </BrowserRouter>
          </Provider>
     );
}

export default App;
