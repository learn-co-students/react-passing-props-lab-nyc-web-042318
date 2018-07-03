import React, { Component } from 'react'

import FruitBasket from './FruitBasket'

// const App = () => <FruitBasket />
export default class App extends Component {
  constructor () {
    super()

    this.state = {
      filters: [], // From Filters
      // items: [], // From filterenedFruitList
      selectedFilter: null, // From FruitBasket
      fruit: [],
      currentFilter: null
    }
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleFilterChange = (e) => {
    this.setState({ currentFilter: event.target.value });
  }

  render () {
    return (
      <FruitBasket 
      filters={this.state.filters}
      items={this.state.items}
      selectedFilter={this.state.selectedFilter}
      fruit={this.state.fruit}
      currentFilter={this.state.currentFilter}
      handleFilterCHange={this.handleFilterChage}
      />
    )
  }
}
