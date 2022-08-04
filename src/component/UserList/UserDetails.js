import React from 'react';
import './UserList.css'

const UserDetails = (props) => {
    const {name, email, role, selected} = props.userValue;
    return (
        <React.Fragment>
            <div className={`cell cell-text ${selected && 'heightler'}`}>{name}</div>
            <div className={`cell cell-text ${selected && 'heightler'}`}>{email}</div>
            <div className={`cell cell-text ${selected && 'heightler'}`}>{role}</div>
        </React.Fragment>
    );
}

export default UserDetails;
