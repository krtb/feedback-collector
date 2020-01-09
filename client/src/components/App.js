// import uses Webpack & Babel, giving us access to ES2015 modules
import React, { Component } from 'react';
// BrowserRouter --> looks at url, changes set of components on screen
// Route --> route objects sets up rule between route and set cof components
import {BrowserRouter, Route} from 'react-router-dom'; // react router helpers to help navigate around dom
import { connect } from 'react-redux'; // use connect to give components ability to call action creators
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


class App extends Component {

    // add lifecycle method to call fetch_user action once app loads
    // check to see if User is registered in mongoDB
    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return (
            <div className="container" >
                <BrowserRouter>
                    {/* always show route by treating as regular component */}
                    <Header />

                    {/* use exact={true} to force Router to only use one route */}
                    <Route exact={true} path="/" component={Landing} />

                    <Route exact path="/surveys" component={Dashboard} />

                    <Route path="/surveys/new" component={SurveyNew} />


                </BrowserRouter>
            </div>
        )
    }
}

// first arg is for mapStateToProps, second is all action creators
export default connect(null, actions)(App);