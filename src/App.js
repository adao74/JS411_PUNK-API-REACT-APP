import React, {Component} from 'react'

import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import Brewery from './Brewery';

class App extends Component {
  constructor () {
    super()

    this.state = {
      listOfBreweries: [],
      liked: [],
      isCollapsed: []
    }
  }

  componentDidMount () {
    axios.get("https://api.openbrewerydb.org/v1/breweries")
    .then( res => res.data )
    .then( listOfBreweries => this.setState({listOfBreweries}))
    // shorthand for .then( res => this.setState({listOfBreweries: res}))
    // shorthand for .then( listOfBreweries => this.setState({listOfBreweries: listOfBreweries}))
  }
  
  handleClick = (index) => {
    console.log(`To verify...button was clicked at index: ${index}`);
  
    this.setState((prevState) => {
      if (!prevState.liked.includes(index)) {
        // Add index if not already liked
        return { liked: [...prevState.liked, index] };
      } else {
        // Remove index if already liked
        return { liked: prevState.liked.filter((element) => element !== index) };
      }
    });
  };
  
  
  toggleCollapse = (index) => {
    const isCollapsedCopy = [...this.state.isCollapsed]
    isCollapsedCopy[index] = !isCollapsedCopy[index]
    this.setState({isCollapsed: isCollapsedCopy});    
  }

  render () {

    const {listOfBreweries, liked, isCollapsed} = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Click on the brewery to hide or show its content.
          </p>
          <div>
            { listOfBreweries.map( (item, index) => { 
              return (
                <>
                  <button
                    key={`button-${index}`}
                    onClick={() => this.toggleCollapse(index)}
                    style={{ width: "90%", padding: "5%", marginBottom: "10px" }}
                  >
                    {item.name}
                  </button>

                  <section style={{ display: isCollapsed[index] ? "none" : "block" }}>
                    <Brewery
                      brewery={item}
                      clickToLike={this.handleClick}
                      index={index}
                      liked={liked}
                    />
                  </section>
                </>
              );
            })};                      
          </div>

        </header>
      </div>
    );
  }

}

export default App;
