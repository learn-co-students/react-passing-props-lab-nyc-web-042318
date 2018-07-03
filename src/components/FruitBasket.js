import React from 'react'

import Filter from './Filter'
import FilteredFruitList from './FilteredFruitList.js'

const FruitBasket = ({ fruit, filters, updateFilterCallback, currentFilter }) => {
  // handleFilterChange = event => {
  //   console.log('new filter: ', event.target.value);
  //   this.setState({ selectedFilter: event.target.value });
  // }

  return (
    <div className='fruit-basket'>
      <Filter handleChange={updateFilterCallback} />
      <FilteredFruitList
        filter={currentFilter}
        fruit={fruit}
      />
    </div>
  )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  updateFilterCallback: () => {},
  currentFilter: null
}
export default FruitBasket
