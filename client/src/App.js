import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link,Route,Redirect} from "react-router-dom";
import CreateAccount from "./components/CreateAccount";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

class App extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            isLogIn:
                {
                    username:null,
                    loggedIn:false,
                }
        };
    }

    componentDidMount=(e)=>
    {
        fetch('/users')
            .then(response=>{
                // console.log(response.text());
                return response.text();
            })
            .then(data=>{
                this.setState(
                    {
                        logInfo:{
                            username: data,
                            loggedIn: true,
                        }
                    });
            });
    };

    loggedInUserInfo =(username, loggedIn)=>{
        console.log("Clear");
        console.log(username + "-" + loggedIn);
        this.setState({
            logInfo:{
                username: username,
                loggedIn: loggedIn,
            }
        });
    };
    logUserOut=(e)=> {
        console.log("Clicked Logout");
        fetch('/users/logout')
            .then(data => {
                return data.text()
            })
            .then(data => console.log(data))
            .then(() => this.loggedInUserInfo(undefined, false))
            .catch(() => console.log("Test"));
    }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <Router>
            <nav>
            <Link to='/' >Home</Link>
            <Link to="/create">Create an account</Link>
            <Link to='/login'> SignIn</Link>
            <Link to='/signout'>Sign Out</Link>
            </nav>
            <Route path='/create'  component={CreateAccount}></Route>
            <Route path='/login' component={SignIn}></Route>
            <Route path='/signout' component={SignOut}></Route>
        </Router>

        </header>
      </div>
    )
  }
}

export default App;
