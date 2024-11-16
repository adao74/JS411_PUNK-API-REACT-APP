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
    console.log(`To verify...button was clicked at index: ${index}`)

    // To update state based on previous state, you can pass an object into setState
    // React will merge this object with the current state.
    const likedArrayCopy = [...this.state.liked]  // create a shallow copy b/c can't manipulate  arrays inside setState
    likedArrayCopy[index] = !likedArrayCopy[index]
    this.setState({liked: likedArrayCopy})
  }
  
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
                      liked={liked[index]}
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
