import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Footer from './pages/Home/Footer/Footer';
import Register from './pages/Login/Register/Register';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboards/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route exact path="/products">
              <Products></Products>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <PrivateRoute path='/products/:id'>
              <ProductDetails></ProductDetails>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
