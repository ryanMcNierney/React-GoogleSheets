import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1Bh5AV7LwiiWOlK6G-kVDX8YiWJNEyLrrYU6WEYnb_lg',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    const { data } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React + Google Sheets Demo</h1>
        </header>
        <div id="employee-details">
          {
            data.map(obj => {
              return (
                <div key={obj.employee}>
                  <p>{obj.employee}</p>
                  <p>{obj.favDog}</p>
                  <img alt={obj.favDog} src={obj.img} />
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
