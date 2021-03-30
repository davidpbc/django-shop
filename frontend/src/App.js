import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import CartScreen from './screens/CartScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={ HomeScreen } exact />
          <Route path="/login" component={ LoginScreen }/>
          <Route path="/register" component={ RegisterScreen } />
          <Route path="/product/:id" component={ ProductScreen } />
          <Route path="/cart/:id?" component={ CartScreen }/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
