import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      grease: false,
      name: false,
      weight: false
    }
  }

  sortFilterClick = (key) => {
    this.setState({
      [key]: !this.state[key]
    })
  }


  copyStolenFromStackOverflow = (aObject) => {
    let v;
    let bObject = Array.isArray(aObject) ? [] : {};
    for (const k in aObject) {
      v = aObject[k];
      bObject[k] = (typeof v === "object") ? this.copyStolenFromStackOverflow(v) : v;
    }
    return bObject;
  }

  hogDataHandler = (data) => {
    let newData = this.copyStolenFromStackOverflow(data)
    if (this.state.grease) {
      newData = newData.filter(obj => obj.greased)
    }
    if (this.state.name) {
      newData = newData.sort((a, b) => (a.name > b.name) ? 1 : -1)
    }
    if (this.state.weight) {
      newData = newData.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
    }
    return newData
  }

  render() {
    return (
      <div className="App">
        <Nav sortFilterClick={this.sortFilterClick}/>
        <HogContainer hogsArr={this.hogDataHandler(hogs)}/>
      </div>
    )
  }
}

export default App;
