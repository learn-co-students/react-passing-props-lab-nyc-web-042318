import React, { Component } from 'react';

const FilteredFruitList = (props)=>{
  let filter = null;
  if(props.filter === null) filter = "all"

  const list = filter === 'all' ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter);
  return (
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );
  
}

FilteredFruitList.defaultProps = {
  fruit: null,
  filter: "all"
}

export default FilteredFruitList;
