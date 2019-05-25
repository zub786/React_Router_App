import React, { Component } from 'react';
import ListGroup from './listGroup'
import MoviesTable from './moviesTable'
export default class Movies extends Component {
  state = {
    movies: [],
    generes: [],
    pageSize: 3,
    currentPage: 1,
    sortColumn: {path: 'title', order: 'asc'}
  };

  componentDidMount() {
    this.setState({
      movies: this.props.movies,
      generes: this.props.geners
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
    debugger;
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
          <div className="col-md-12">
          <a href="movie/new" className="btn btn-primary">Add New</a>
          <hr/>
          </div>
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
