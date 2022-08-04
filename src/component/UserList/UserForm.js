import React, { useEffect, useState } from 'react';
import './UserForm.css'

const UserForm = (props) => {
    const { onUserInput, userValue} = props;
    const { name, email, role } = props.userValue;
    const [user, setUser] = useState({ name, email, role });

    useEffect(() => {
        onUserInput({ ...userValue, ...user })
    }, [user]);


    const updateUserName = (event) => {
        setUser((prev) => {
            return { ...prev, name: event.target.value }
        })
    }

    const updateUserEmail = (event) => {
        setUser((prev) => {
            return { ...prev, email: event.target.value }
        })
    }


    const updateUserRole = (event) => {
        setUser((prev) => {
            return { ...prev, role: event.target.value }
        })
    }

    return (
        <React.Fragment>
            <div className="cell cell-text">
                <input
                    className='field'
                    name='name'
                    type="text"
                    value={user.name}
                    onChange={updateUserName} />
            </div>

            <div className="cell cell-text">
                <input
                    className='field'
                    name='email'
                    type="text"
                    value={user.email}
                    onChange={updateUserEmail} />
            </div>

            <div className="cell cell-text">
                <input
                    className='field'
                    name='role'
                    type="text"
                    value={user.role}
                    onChange={updateUserRole} />
            </div>


        </React.Fragment>
    );
}

export default UserForm;
