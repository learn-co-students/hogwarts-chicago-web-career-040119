import React, { Component } from "react";


export default class HogCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      details: props.show
    }
  }

  onClickHandler = () => {
    this.setState({
      details: !this.state.details
    })
  }

  hideOrShowDetails = () => {
    let name = this.props.hogData.name
    name = name.replace(/ /g,"_").toLowerCase()
    let hogPic = require(`../hog-imgs/${name}.jpg`);
    return (
      this.state.details
      ?
      <div>
        <p>{this.props.hogData.name} - Details</p>
        <br />
        <p>Specialty: {this.props.hogData.specialty}</p>
        <br />
        <p>Weight-to-Fridge Ratio: {this.props.hogData["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</p>
        <br />
        <p>Highest Medal: {this.props.hogData["highest medal achieved"]}</p>
        <br />
      </div>
      :
      <div>
        <p>{this.props.hogData.name}</p>
        <img src={hogPic} alt=""/>
      </div>
    )
  }


  render() {


    return (
      <div onClick={this.onClickHandler} className="ui eight wide column">
        {this.hideOrShowDetails()}
      </div>
    )
  }
}
