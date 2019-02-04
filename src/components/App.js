import React, { Component } from "react";
import { connect } from "react-redux";

import { getUsersRequest } from "../actions/users";

class App extends Component {
    constructor(props) {
        super(props);

        this.props.getUsersRequest();
    }

    render() {
        return (
            <div className="App">
                <h1>Hello sagas</h1>
            </div>
        );
    }
}

export default connect(
    null,
    {
        getUsersRequest
    }
)(App);
