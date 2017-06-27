import React, { Component } from 'react';
import axios from "axios";
import List from "./list";
export default class App extends Component {
  componentDidMount(){
    this.getPeople();
  }
  constructor(props){
    super(props);
    this.state = {
      people: [],
    }
  }
  getPeople = () => {
    return axios.get("http://swapi.co/api/people")
    .then((response)=>{
    this.setState({people: response.data.results});
    });
  }
  render() {
    const {people} = this.state;
    return (
      <div>
        <h1>Star Friends</h1>
        <List people={people}/>
      </div>
    );
  }
}
