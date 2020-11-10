import React from 'react';
import UserDetails from './UsersDetails';
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../../store/actions";

const UsersList = (props) => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const _viewUser = (id) => {
        props.history.push(`/users/${id}`);
    }

    const usersDetails = users.map((user) => {
        return (
            <UserDetails
                key={user.id}
                id={user.id}
                name={user.name}
                deleteUser={() => dispatch(deleteUser(user.id))}
                viewUser={() => _viewUser(user.id)}
            />
        )
    });

    return (
        <div>

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h2> Users : </h2>
                <button type="button" onClick={() => dispatch(addUser({id: 6, name: 'jean'}))}> Ajouter</button>
            </div>

            {/*Affichage de la liste*/}
            {usersDetails}
        </div>
    )
}

export default UsersList;