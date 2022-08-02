import React from 'react';
import './UserList.css'
import { Checkbox } from '@mui/material';

const UserList = (props) => {
    const { adminList } = props;
    var filteredList = [];

    if(props.enteredValue) {
        filteredList = adminList.filter(item => 
            item.name.includes(props.enteredValue) || 
            item.email.includes(props.enteredValue) || 
            item.role.includes(props.enteredValue))
        } else {
            filteredList = adminList;
        }
    

    return (
        <div className='table'>
            <div className='table-header row'>
                <div className="cell">
                    <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
                <div className="cell cell-text">Name</div>
                <div className="cell cell-text">Email</div>
                <div className="cell cell-text">Role</div>
                <div className="cell cell-text">Action</div>
            </div>

            {filteredList.map(user => {
                return (
                    <div className='table-content row' key={user.id}>
                        <div className="cell">
                            <Checkbox
                                // checked={checked}
                                // onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </div>
                        <div className="cell cell-text">{user.name}</div>
                        <div className="cell cell-text">{user.email}</div>
                        <div className="cell cell-text">{user.role}</div>
                        <div className="cell cell-text">Action</div>
                    </div>
                )
            })}

        </div>
    );
}

export default UserList;
