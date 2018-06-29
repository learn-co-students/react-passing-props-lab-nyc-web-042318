import React from 'react';
import Filter from './Filter';
import FruitBasket from './FruitBasket';
import FilteredFruitList from './FilteredFruitList';


//Ensure that all the remaining components 
//(FruitBasket, FilteredFruitList, and Filter) 
//are stateless functional components that are strictly presentational.

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruit: [],
            filters: [],
            currentFilter: null
        }
        
    }
    
    handleFilterChange = event => {
        console.log('new filter: ', event.target.value);
        this.setState({ currentFilter: event.target.value });
    }

    fetchFilters = () => {
        fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));
    }


    componentDidMount() {
        fetch('/api/fruit')
          .then(response => response.json())
          .then(fruit => this.setState({ fruit }))
          .then(this.fetchFilters);
      }

    render() {
        return (
            <div>
                 <FruitBasket filters ={this.state.filters} 
                 handleChange={this.handleFilterChange}
                 fruit={this.state.fruit}
                 selectedFilter={this.state.currentFilter}/>

            </div>
        );
    }
}
 


export default App;
