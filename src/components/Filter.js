import React from 'react'

const Filter = ({ filters, handleChange }) => {
  return (
    <select onChange={handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  )
}

// componentWillMount() {
//   this.fetchFilters();
// }

// fetchFilters = () => {
//   fetch('/api/fruit_types')
//     .then(response => response.json())
//     .then(filters => this.setState({ filters }));
// }

// render() {
//   return (

//   );
// }

Filter.defaultProps = {
  filters: [],
  handleChange: function () {}
}

export default Filter
