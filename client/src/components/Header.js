import React, { Component } from 'react';
import { connect } from 'react-redux';
import reducers from '../reducers'

// steps to connect to redux store
// import connect function
// define mapStateToProps function

class Header extends Component {
    render() {
        console.log(this.props, 'from HEADER.js')
        return(
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Feedback Collector</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="">Login with Google</a></li>
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