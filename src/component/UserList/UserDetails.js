import React from 'react';
import './UserList.css'

const UserDetails = (props) => {
    const {name, email, role} = props.userValue;
    return (
        <React.Fragment>
            <div className="cell cell-text">{name}</div>
            <div className="cell cell-text">{email}</div>
            <div className="cell cell-text">{role}</div>
        </React.Fragment>
    );
}

export default UserDetails;
