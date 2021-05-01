import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

// import Navbar from "./components/home/Navbar";
// import Auth from './components/login/Auth';
import Goals from './components/goals/Goals';
import Notes from './components/notes/Notes';
import Home from './components/home/Home';

class App extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  //set temporary tokens here until we get a working login!!!!
  // const[sessionToken: string, setSessionToken: string] = useState();

  //everytime the app rerenders check for token in local storage
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     this.setSessionToken(localStorage.getItem("token"));
  //   }
  // }, []);

  //updates token in local storage and in the state sessionToken
  // const updateToken = (newToken, userId) => {
  //   localStorage.setItem("token", newToken);
  //   localStorage.setItem("userId", parseInt(userId));
  //   this.setSessionToken(newToken);
  // };

  //deletes all local storage... used mainly for logout
  // const clearToken = () => {
  //   localStorage.clear();
  //   setSessionToken("");
  // };

  render() {
    return (
      <div>
        {/* {!sessionToken ? (
          <Auth updateToken={updateToken} />
        ) : (
          <BrowserRouter>
            <Switch> */}
        <div>
          <Router>
            {/* <Navbar /> */}
            <Switch>
              <Route exact path="/goals" component={Goals} />
              <Route exact path="/notes" component={Notes} />

            </Switch>
            {/* sessionToken={sessionToken} clearToken={clearToken} */}
            <Home />
          </Router>
        </div>
        {/* </Switch>
          </BrowserRouter>
        )
        } */}
      </div >
    )
  }
}

export default App
