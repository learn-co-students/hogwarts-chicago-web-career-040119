import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';
import Nav from './Nav'
import sillyHogsData from '../porkers_data';
import HogsContainer from './HogsContainer'

console.log(sillyHogsData)

const makeHogsDataLessSilly = hogsData => {
  return hogsData.map((hog, i) => {
    const {
      name,
      specialty,
      greased,
      'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': weight,
      'highest medal achieved': medal
    } = hog;
    return {
      id: i,
      name,
      specialty,
      greased,
      weight,
      medal,
      showDetails: false
    }
  })
}

const hogsData = makeHogsDataLessSilly(sillyHogsData)

class App extends Component {
  state = {
    hogs: hogsData,
    greasedFilter: 'all'// we  need a way to toggle this
  }

toggleHogDetails = (hogId) => {
    console.log(hogId)
    //find the hog change it => we need a copy
    const hogs = this.state.hogs.map(hog=> {
      if (hog.id === hogId) {
        return {...hog, showDetails: !hog.showDetails}
      } else {
        return hog //the original hog
      }
    })
    this.setState({
      hogs
    })
  }

  toggleGreased = (event) => {
    this.setState({
      greasedFilter: event.target.value
    })
  }

  applyGreasedFilter = () => {
      if (this.state.greasedFilter === "all") {
        return this.state.hogs;
      } else if (this.state.greasedFilter === "greased") {
        return this.state.hogs.filter(h => h.greased);
      } else {
        return [];
      }
    };

  render() {
    return (
      <div className="App">
          <Nav toggleGreased={this.toggleGreased}
          greasedFilter={this.state.greasedFilter}/>
          {/*pass the props to Hog*/}
          <HogsContainer
          toggleHogDetails={this.toggleHogDetails}
          hogs={this.applyGreasedFilter()}
          />
      </div>
    )
  }
}

export default App;
