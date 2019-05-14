import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import NavbarMovies from "./components/navbarMovies";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
import Movies from './components/movies';
import Rentals from './components/rentals';
import Customers from './components/customers';
import MovieDetails from './components/movieDetails';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarMovies />
        <div className="content">
          <Switch>
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route
              path="/movies"
              render={props => <Movies sortBy="newest" {...props} />}
            />
            <Route
              path="/rentals"
              render={props => <Rentals isActive="true" {...props} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" Component={Rentals} />
            <Route path='/products/:id' component={ProductDetails} />
            <Route
              path='movie/details/:title'
              render={props => <MovieDetails {...props} />}
            />
            <Route
              path="/products"
              render={props => <Products sortBy="newest" {...props} />}
            />

            <Route path="/admin" component={Dashboard} />
            <Redirect from="/messages" to="/posts" />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Movies} />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
