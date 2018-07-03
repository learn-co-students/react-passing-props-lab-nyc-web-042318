import React from 'react'

const FilteredFruitList = ({ fruit, filter }) => {
  const list = !filter || filter === 'all' ? fruit : fruit.filter(i => i.fruit_type === filter)

  return (
    <ul className='fruit-list'>
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>

  // componentDidMount () {
  //   fetch('/api/fruit')
  //     .then(response => response.json())
  //     .then(items => this.setState({ items }))
  // }
  )
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}
export default FilteredFruitList
