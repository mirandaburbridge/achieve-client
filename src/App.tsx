import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

// import Navbar from "./components/home/Navbar";
import Auth from './components/login/Auth';
import Goals from './components/goals/Goals';
import Notes from './components/notes/Notes';
import Home from './components/home/Home';

export interface AppProps {

}

export interface AppState {
  token: string
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { token: '' };
  }

  setSessionToken = (newToken: string) => {
    localStorage.setItem('token', newToken),
      this.setState({ token: newToken })
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({ token: localStorage.getItem('token') })
    }
  }

  clearToken = () => {
    localStorage.clear();
    this.setState({ token: '' });
  };

  displayLogin = () => {
    return (
      localStorage.getItem('token') ? (
        <Router>
          <Switch>
            <div>
              <Router>
                {/* <Navbar /> */}
                <Switch>
                  <Route exact path="/goals" component={Goals} />
                  <Route exact path="/notes" component={Notes} />
                </Switch>
                <Home />
              </Router>
            </div>
          </Switch>
        </Router>
      ) : (
        <Auth token={this.state.token} />
      )
    )
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;