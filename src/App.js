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
import LoginPage from './components/loginPage';
import Registration from './components/registration';
import CreateMovie from './components/createMovie';
class App extends Component {
  state = {
    movies: [
      { id: 1, title: "Movie 1", genre: "Action", stock: 200, rate: 3.5 },
      { id: 2, title: "Movie 2", genre: "Comedy", stock: 230, rate: 1.5 },
      { id: 3, title: "Movie 3", genre: "Technology", stock: 220, rate: 3.5 },
      { id: 4, title: "Movie 4", genre: "Action", stock: 205, rate: 6.5 },
      { id: 5, title: "Movie 5", genre: "Technology", stock: 202, rate: 6.5 },
      { id: 6, title: "Movie 6", genre: "Comedy", stock: 223, rate: 3.5 },
      { id: 7, title: "Movie 7", genre: "Technology", stock: 256, rate: 3.5 },
      { id: 8, title: "Movie 8", genre: "Science", stock: 453, rate: 2.5 }
    ],
    geners: [
      { text: "All Genre", id: "" },
      { text: "Action", id: 1 },
      { text: "Comedy", id: 2 },
      { text: "Technology", id: 3 },
      { text: "Science", id: 4 }
    ]
  };
  
  addMovie = updatedMovie => {
    debugger;
    this.setState({updatedMovie});
    
  }
  render() {
    return (
      <div>
        <NavbarMovies />
        <div className="content">
          <Switch>
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route
              path="/movie/new"
              render={props => <CreateMovie 
              OnAdd={this.addMovie} 
              movies={this.state.movies}
              geners={this.state.geners} {...props} />}
              exact />}
            />
            <Route
              path="/movies"
              render={props => <Movies 
              movies={this.state.movies} 
              geners={this.state.geners} {...props} />}
            />
            <Route
              path="/rentals"
              render={props => <Rentals isActive="true" {...props} />}
            />
            <Route
              path="/customers"
              render={props => <Customers isActive="true" {...props} />}
            />
            <Route path='/products/:id' component={ProductDetails} />
            <Route
              path='/movie/details/:title?'
              render={props => <MovieDetails {...props} />}
            />
            <Route
              path="/products"
              render={props => <Products sortBy="newest" {...props} />}
            />
            <Route path="/register" component={Registration} />
            <Route path="/login" component={LoginPage} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Movies} />
            <Redirect to="/not-found" />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
