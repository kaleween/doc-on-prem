import React from 'react';
import Users from '../../users';
import UsersDetail from '../Tuto/UsersDetails';

const UserPage = (props) => {
    const id = props.match.params.id;

    const user = Users.find(user => {
        return user.id === Number(id);
    });

    const detail = user ?
        <UsersDetail id={user.id} name={user.name} deleteUser={null} viewUser={null} />:
        <span>Aucun utilisateur ne correspond à l'id :</span>;

    return(
        <div>
            <h1>Détail de l'utilisateur</h1>
            <div>
                { detail }
            </div>
        </div>
    )
}

export default UserPage;