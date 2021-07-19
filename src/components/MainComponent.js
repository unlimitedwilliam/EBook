import React, { Component } from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Home from './HomeComponent';
import Login from './LoginComponent';
import Signup from './SignupComponent';
import AdminDashboard from './AdminDashboard/AdminDashboard';

class Main extends Component {
    render() {
        return (
            <div>
                <Switch location={this.props.location}>
                    {/* To be developed later */}
                    <Route path='/home' component={() => <Home />} />
                    {/* Hung 16/7 */}
                    <Route path='/login' component={() => <Login />} />
                    <Route path='/signup' component={() => <Signup />} />
                    <Route path='/admin' component={() => <AdminDashboard />} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default Main