import React, { Component } from 'react';

class CharInfo extends Component{
  constructor(props){
    super(props);
    this.state = {
      expanded: false,
    }
  }
  openBox = () => {
    this.setState({expanded: !this.state.expanded})
  }
  closeBox = () => {
    this.setState({expanded: !this.state.expanded})
  }
  render(){
    const info = this.props.charInfo;
    if(!this.state.expanded){
      return(
        <p className="btn btn-info" onClick={this.openBox}>Show Info</p>
      )
    }else {
      return(
        <div className="user-details">
          <p className="btn btn-danger" onClick={this.closeBox}>Hide Info</p>
          <ul>
            <li><h2>Gender: {info.gender}</h2></li>
            <li><h2>Birth date: {info.birth_year}</h2></li>
            <li><h2>Hair color: {info.hair_color}</h2></li>
          </ul>
        </div>
      )
    }
  }
}
export default CharInfo;
