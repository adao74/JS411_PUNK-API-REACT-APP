import React, {Component} from 'react'

import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import Brewery from './Brewery';

class App extends Component {
  constructor () {
    super()

    this.state = {
      listOfBreweries: []
    }
  }

  componentDidMount () {
    axios.get("https://api.openbrewerydb.org/v1/breweries")
    .then( res => res.data )
    .then( listOfBreweries => this.setState({listOfBreweries}))
    // shorthand for .then( res => this.setState({listOfBreweries: res}))
    // shorthand for .then( listOfBreweries => this.setState({listOfBreweries: listOfBreweries}))
  }
  
  
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ol>
            { this.state.listOfBreweries.map( (item, index) => {
                console.log(item)
                return (<Brewery key={index} brewery={item} websiteurl={item.website_url}></Brewery>);
                
                // return Object.entries(item).map(([objectkey, value]) => {
                //   console.log(`${value}`)
                //   return (<Brewery key={index} brewery={value} websiteurl={item.website_url}></Brewery>);
                })};
              
                        
          </ol>

        </header>
      </div>
    );
  }

}

export default App;
