export const Types = {
    GET_USERS_REQUEST: "users/get_users_request",
    GET_USERS_SUCCESS: "users/get_users_success",
    CREATE_USER_REQUEST: "users/create_user_request",
    DELETE_USER_REQUEST: "users/delete-user-request",
    USERS_ERROR: "users/users-error"
};

export const getUsersRequest = () => ({
    type: Types.GET_USERS_REQUEST
});

export const getUsersSuccess = ({ items }) => ({
    type: Types.GET_USERS_SUCCESS,
    payload: {
        items
    }
});

export const createUserRequest = ({ firstName, lastName }) => {
    return {
        type: Types.CREATE_USER_REQUEST,
        payload: {
            firstName,
            lastName
        }
    };
};

export const deleteUserRequest = userId => {
    return {
        type: Types.DELETE_USER_REQUEST,
        payload: {
            userId
        }
    };
};

export const usersError = error => {
    return {
        type: Types.USER_ERROR,
        payload: {
            error
        }
    };
};
