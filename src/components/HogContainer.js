import React, { Component } from "react";
import HogCard from "./HogCard"

export default class HogContainer extends Component {


  renderHogCards = () => {
    return this.props.hogsArr.map((hogData, index) => <HogCard hogData={hogData} show={false}/> )
  }

  render() {
    return (
      <div className="ui grid container">
        {this.renderHogCards()}
      </div>
    )
  }
}
