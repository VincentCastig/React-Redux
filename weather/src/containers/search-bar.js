import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { term: '' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ term: event.target.value })
    }
    onFormSubmit(event) {
        event.preventDefault();
        //fetch weather data
    }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
          <input 
            placeholder="Get a five day forecast in your favorite cities"
            value={this.state.term}
            onChange={ this.handleChange }
        />
          <span className="App-intro">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
      </form>
    );
  }
}

export default SearchBar;
