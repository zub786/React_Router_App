// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// class Products extends Component {
//   state = {
//     products: [
//       { id: 1, name: "Product 1" },
//       { id: 2, name: "Product 2" },
//       { id: 3, name: "Product 3" }
//     ]
//   };

//   render() {
//     return (
//       <div>
//         <h1>Products</h1>
//         <ul>
//           {this.state.products.map(product => (
//             <li key={product.id}>
//               <Link to={`/products/${product.id}`}>{product.name}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Products;





























import React, { Component } from 'react';
import ListGroup from './listGroup'
import MoviesTable from './moviesTable'
export default class Products extends Component {
  state = {
    movies: [],
    generes: [],
    pageSize: 3,
    currentPage: 1,
    sortColumn: {path: 'title', order: 'asc'}
  };

  componentDidMount() {
    this.setState({
      movies: [
        { id: 1, title: "abc", genre: "Action", stock: 200, rate: 3.5 },
        { id: 2, title: "eee", genre: "Comedy", stock: 230, rate: 1.5 },
        { id: 3, title: "dee", genre: "Technology", stock: 220, rate: 3.5 },
        { id: 4, title: "sdsd", genre: "Action", stock: 205, rate: 6.5 },
        {
          id: 5,
          title: "dede",
          genre: "Technology",
          stock: 202,
          rate: 6.5
        },
        { id: 6, title: "jhk", genre: "Comedy", stock: 223, rate: 3.5 },
        { id: 7, title: "dgr", genre: "Technology", stock: 256, rate: 3.5 },
        { id: 8, title: "ewd", genre: "Science", stock: 453, rate: 2.5 }
      ],
      generes: [
        { text: "All Genre", id: "" },
        { text: "Action", id: 1 },
        { text: "Comedy", id: 2 },
        { text: "Technology", id: 3 },
        { text: "Science", id: 4 }
      ]
    });
  }

  handleDelete = mid => {
    const updatedMovies = this.state.movies.filter(m => m.id !== mid);
    this.setState({ movies: updatedMovies });
  };
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };
  handleToggleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleGenereSelet = genere => {
      this.setState({selectedGenere: genere, currentPage: 1});
  };
  render() {
    const { pageSize, currentPage,
       movies: allMovies, selectedGenere, sortColumn } = this.state;
    return (
      <React.Fragment>
          <br/>
        <div className="row">
          <div className="col-md-3">
            <ListGroup 
            generes={this.state.generes} 
            OnGenereSelect={this.handleGenereSelet}
            textProperty="text"
            idProperty="id"
            selectedItem={selectedGenere} />
          </div>
          <div className="col-md-9">
            <MoviesTable 
            movies={this.state.movies} 
            OnLike={this.handleToggleLike} 
            OnDelete={this.handleDelete}
            OnPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
            pageSize={this.state.pageSize}
            selectedGenere={this.state.selectedGenere}
            OnSort={this.handleSort}
            sortColumn={sortColumn} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
