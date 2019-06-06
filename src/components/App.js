import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Pig from './Pig'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pigs: hogs
    }
  }

  sortAZ = arr => {
    return arr.sort((a,b) => (a.name > b.name) ? 1 : -1)
  }

  sortZA = arr => {
    let newArr = this.sortAZ(arr)
    return newArr.reverse()
  }

  sortFatUp = arr => {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    return arr.sort((a,b) => (a[weight] < b[weight]) ? 1 : -1)
  }

  sortFatDown = arr => {
    let newArr = this.sortFatUp(arr)
    return newArr.reverse()
  }

  filterGrease = arr => {
    return arr.filter(pig => pig.greased === true)
  }

  sortHandler = event => {
    console.log(event)
    switch (event.target.value) {
      case "ascFat":
        this.setState({
          pigs: this.sortFatUp(hogs)
        })
        break;
      case "descFat":
        this.setState({
          pigs: this.sortFatDown(hogs)
        })
        break;
      case "az":
        this.setState({
          pigs: this.sortAZ(hogs)
        })
        break;
      case "za":
        this.setState({
          pigs: this.sortZA(hogs)
        })
        break;
      case "greased":
        this.setState({
          pigs: this.filterGrease(hogs)
        })
        break;
      default:
        this.setState({
          pigs: hogs
        })
    }
  console.log(this.state.pigs)
  }

  render() {

    const piggies = this.state.pigs.map(hog => {
      return <Pig {...hog} />
    })

    return (
      <div className="App">
          < Nav selectHandler={this.sortHandler} />
          <div className="ui grid container">
            {piggies}
          </div>
          
      </div>
    )
  }
}

export default App;
