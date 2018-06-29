import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.handleChange} filters= {props.filters} />
      <FilteredFruitList
        filter={props.selectedFilter} 
        fruit = {props.fruit}/>
    </div>
  );
  
}

FruitBasket.defaultProps = {
  fruit: null,
  filters: "all",
  currentFilter: null,
  updateFilterCallback: null
}

export default FruitBasket;
