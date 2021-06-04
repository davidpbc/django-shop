import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import CartScreen from './screens/CartScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import ShippingScreen from './screens/ShippingScreen.js';
import PaymentScreen from './screens/PaymentScreen.js';
import PlaceOrderScreen from './screens/PlaceOrderScreen.js';
import OrderScreen from './screens/OrderScreen.js';
import UserListScreen from './screens/UserListScreen.js';
import UserEditScreen from './screens/UserEditScreen.js';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={ HomeScreen } exact />
          <Route path="/login" component={ LoginScreen }/>
          <Route path="/register" component={ RegisterScreen } />
          <Route path="/profile" component={ ProfileScreen } />
          <Route path="/shipping" component={ ShippingScreen } />
          <Route path="/payment" component={ PaymentScreen } />
          <Route path="/placeorder" component={ PlaceOrderScreen } />
          <Route path="/order/:id" component={ OrderScreen } />
          <Route path="/product/:id" component={ ProductScreen } />
          <Route path="/cart/:id?" component={ CartScreen }/>
          <Route path="/admin/userlist" component={ UserListScreen }/>
          <Route path="/admin/user/:id/edit" component={ UserEditScreen }/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
