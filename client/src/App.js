import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Search from './components/Search';
// import Header from './components/Header';
// import Title from './components/Title';

class App extends Component {

  // constructor(props) {
  //   super(props);
    
  //   this.state = {
  //       posts: []
  //   }
  // }

  // getDbData = () => {
  //   axios.get('/')
  //     .then((response) => {
  //       const data = response.data
  //       this.setState({ posts: data })
  //       console.log("Data Recieved!")
  //     })
  //     .catch(() => {
  //       console.log("No Data")
  //     })
  // }

  render() {
    return (
      <div className="App">
        <Search />
      </div>
    );
  }
}

export default App;
