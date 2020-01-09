import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// steps to connect to redux store
// import connect function
// define mapStateToProps function

class Header extends Component {
    renderContent(){
        switch (this.props.auth) {
            case null:
                return 'Loading...';
            case false:
                return <li> <a href="/auth/google" > Login with Google </a> </li> ;
            default:
                return <li> <a href="/api/logout" > Log out </a> </li>;
        }
    }

    render() {
        console.log(this.props, 'from HEADER.js')
        return(
            <nav>
                <div class="nav-wrapper">
                    <Link to={ this.props.auth ? '/surveys' : '/'} 
                        class="brand-logo">Feedback Collector
                    </Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        { this.renderContent() }
                    </ul>
                </div>
            </nav>
        )
    }   
}

// destructure attributes from state
function mapStateToProps({auth}){
    // combine auth:auth
    return { auth }
}

export default connect(mapStateToProps)(Header);