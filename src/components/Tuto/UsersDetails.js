import React from 'react';

const UserDetails = ({id, name, viewUser, deleteUser}) => {   
	return(
		<div>
			<span>{id} - { name.toUpperCase() } </span>
		
			{
				viewUser ? <button type="button" onClick={() => viewUser()}>View</button> : null
			}

			{
				deleteUser ? <button type="button" onClick={() => deleteUser()}>Delete</button> : null
			}
		</div>
	);
};


export default UserDetails;