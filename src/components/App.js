import React, { Component } from "react";
import { connect } from "react-redux";

import { getUsersRequest } from "../actions/users";
import UsersList from "./UsersList";
import UserForm from "./UserForm";

class App extends Component {
    constructor(props) {
        super(props);

        this.props.getUsersRequest();

        console.log(props);
    }

    handleOnSubmit = ({ firstName, lastName }) => {
        console.log("firstName:", firstName);
        console.log("lastName:", lastName);
    };

    render() {
        const users = this.props.users;

        return (
            <div
                className="App"
                style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}
            >
                <h1>Hello sagas</h1>
                <UserForm onSubmit={this.handleOnSubmit} />
                <UsersList users={users.items} />
            </div>
        );
    }
}

export default connect(
    ({ users }) => ({ users }),
    {
        getUsersRequest
    }
)(App);
