import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props){
    super(props)
    this.state = {
      backgroundColor: this.props.value,
      color: this.props.value
    }
  }

  changeColor = (e) => {
    this.setState({color: "#333",backgroundColor: "#333"})
  }

  render() {
    return <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}></div>
  }
}
