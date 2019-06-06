import React, { Component } from 'react'

class Pig extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            hidePig: true
        }
    }

    showDetes = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    hideMe = () => {
        this.setState({
            hidePig: !this.state.hidePig
        })
    }



    render() {
        let pigName = this.props.name.toLowerCase().replace(/ /g, "_")
        let pigPic = require(`../hog-imgs/${pigName}.jpg`)
        let BtnWord = () => this.state.hidePig ? "Hide" : "Show"
        let showHide = () => this.state.visible ? "show" : "hide"
        // let hidePig = () => this.state.hidePig ? "show ui card" : "hide ui card"
        let hidePig = () => this.state.hidePig ? "show" : "hide"

        return (
            <div>
                <div className={hidePig()} onClick={this.showDetes}>
                    <div className="image">
                        <img src={pigPic}></img>
                    </div>
                    <div className="content">
                        <div className="header">Name: {this.props.name}</div>
                        <div className={showHide()}>
                            <div className="description">Specialty: {this.props.specialty}</div>
                            <div className="description">Greased: {this.props.greased.toString()}</div>
                            <div className="description">Awards: {this.props['highest medal achieved']}</div>
                        </div>
                    </div>

                </div>
                <button onClick={this.hideMe}>{BtnWord()} {this.props.name}</button>
            </div>
        )
    }
}

export default Pig