import React, { Component }  from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => [
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({fruit}))
  ]

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        handleFilterChange={this.handleFilterChange}
        selectedFilter={this.state.currentFilter}
      />
    )
  }
}

export default App;
