import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
  constructor(){
    super()
    this.state = {
      filters: [],
      currentFilter: null,
      fruit: []
    }
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruitList();
  }

  fetchFruitList = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        fruit={this.state.fruit}
        handleFilterChange={this.handleFilterChange}/>
    )
  }
}

export default App;
