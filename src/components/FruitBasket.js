import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     filters: [],
  //     selectedFilter: null
  //   };
  // }

  // handleFilterChange = event => {
  //   console.log('new filter: ', event.target.value);
  //   this.setState({ selectedFilter: event.target.value });
  // }

  console.log('fruitbasket props', props)
    return (
      <div className="fruit-basket">
        <Filter
          handleChange={props.onChange}
          filters = {props.filters}
        />
        <FilteredFruitList
          filter={props.filter}
          fruit = {props.fruit}
          />
      </div>
    );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: 'all',
  updateFilterCallback: () => console.log('default')
};

export default FruitBasket;
