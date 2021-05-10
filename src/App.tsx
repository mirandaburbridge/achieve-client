import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

import Navbar from "./components/home/Navbar";
import Auth from './components/login/Auth';
import Goals from './components/goals/Goals';
import Notes from './components/notes/Notes';
import Home from './components/home/Home';
import NewNote from './components/notes/NewNote';

export interface AppProps {

}

export interface AppState {
  token: any
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { token: '' };
  }

  updateToken = (newToken: any) => {
    localStorage.setItem('sessionToken', newToken),
      this.setState({ token: newToken })
  }

  componentDidMount() {
    if (localStorage.getItem('sessionToken')) {
      this.setState({ token: localStorage.getItem('sessionToken') })
    }
  }

  clearToken = () => {
    localStorage.clear();
    this.setState({ token: '' });
  };

  displayLogin = () => {
    return (
      localStorage.getItem('sessionToken') ? (
        <Router>
          <Switch>
            <div>
              <Router>
                <Navbar clearToken={this.clearToken} token={this.state.token} />
                <Switch>
                  <Route exact path="/goals" component={Goals} />
                  <Route exact path="/notes/create" component={NewNote} />
                </Switch>
                <Home token={this.state.token} />
              </Router>
            </div>
          </Switch>
        </Router>
      ) : (
        <Auth updateToken={this.updateToken} />
      )
    )
  }

  render() {
    return (
      <div>
        {this.displayLogin()}
      </div>
    );
  }
}

export default App;