import users from '../../users';
import { ADD_USER, DELETE_USER } from '../actions/types';

const initialState = {
    users: users
}

export default function rootReducer(state = initialState, action) {
    const copyUser = [ ...state.users];
    let index;

    switch (action.type) {
        case ADD_USER:
            return {
                users: [ ...state.users, action.payload]
            };
        case DELETE_USER:
            index = copyUser.findIndex(user => {
                return user.id === action.payload;
            });

            copyUser.splice(index, 1);

            return {
                user: copyUser
            }
        default:
            return state;
    }
}
