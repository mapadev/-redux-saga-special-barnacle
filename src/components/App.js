import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";

import {
    getUsersRequest,
    createUserRequest,
    deleteUserRequest,
    usersError
} from "../actions/users";
import UsersList from "./UsersList";
import UserForm from "./UserForm";

class App extends Component {
    constructor(props) {
        super(props);

        this.props.getUsersRequest();
    }

    handleSubmit = ({ firstName, lastName }) => {
        this.props.createUserRequest({
            firstName,
            lastName
        });
    };

    handleDeleteUserClick = userId => {
        this.props.deleteUserRequest(userId);
    };

    handleCloseAlert = () => {
        this.props.usersError({
            error: ""
        });
    };

    render() {
        const users = this.props.users;

        return (
            <div
                className="App"
                style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}
            >
                <h1>Hello sagas</h1>

                <Alert
                    color="danger"
                    isOpen={Boolean(this.props.users.error)}
                    toggle={this.handleCloseAlert}
                >
                    {this.props.users.error}
                </Alert>
                <UserForm onSubmit={this.handleSubmit} />
                <UsersList
                    users={users.items}
                    onDeleteUser={this.handleDeleteUserClick}
                />
            </div>
        );
    }
}

export default connect(
    ({ users }) => ({ users }),
    {
        getUsersRequest,
        createUserRequest,
        deleteUserRequest,
        usersError
    }
)(App);
