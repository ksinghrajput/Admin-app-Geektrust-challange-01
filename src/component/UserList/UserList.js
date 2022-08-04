import React, { useMemo, useState } from 'react';
import UserDetails from './UserDetails';
import './UserList.css'
import '../Pagenation/Pagenation.css'
import { Checkbox } from '@mui/material';
import usePagination from "../Pagenation/pagination";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { MdEditCalendar, MdDeleteOutline, MdDone } from "react-icons/md";
import UserForm from './UserForm';

const UserList = (props) => {
    const { adminList, enteredValue } = props;
    const [page, setPage] = useState(1);
    const [userList, setUserList] = useState(adminList);
    const PER_PAGE = 10;

    useMemo(() => {
        let filteredList = [];
        if (enteredValue) {
            filteredList = adminList.filter(item => item.name.includes(enteredValue) || item.email.includes(enteredValue) || item.role.includes(enteredValue))
        } else {
            filteredList = adminList;
        }
        setUserList(filteredList)
    }, [enteredValue])


    const count = Math.ceil(userList.length / PER_PAGE);
    const _adminList = usePagination(userList, 10);

    const handleChange = (e, p) => {
        setPage(p);
        _adminList.jump(p);
    };

    const deleteUserHandler = (deletedAdmin) => {
        let adminAfterDeletion = userList.filter((admin) => {
            return admin.id !== deletedAdmin;
        });
        setUserList(adminAfterDeletion);
    };

    const showEditForm = (userId) => {
        changeState(userId, true);
    }

    const submitForm = (userId) => {
        changeState(userId, false);
    }

    const changeState = (userId, stateValue) => {
        setUserList(userList.map(item => {
            if (item.id === userId) {
                return {
                    ...item,
                    state: stateValue
                }
            } else {
                return item
            }

        }))
    }

    const usermodificationHandler = (userData) => {
        console.log(userData);
        UpdateUserDetail(userData);
    }

    const UpdateUserDetail = (userData) => {
        setUserList(userList.map(item => {
            if (item.id === userData.id) {
                return {
                    ...item,
                    ...userData
                }
            } else {
                return item
            }

        }))
    }

    return (
        <div className='table'>
            <div className='table-header row'>
                <div className="cell">
                    <Checkbox
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
                <div className="cell cell-text">Name</div>
                <div className="cell cell-text">Email</div>
                <div className="cell cell-text">Role</div>
                <div className="cell cell-text">Action</div>
            </div>

            {_adminList.currentData().map(user => {
                return (
                    <div className='table-content row' key={user.id}>
                        <div className="cell">
                            <Checkbox
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </div>

                        {!user.state && <UserDetails userValue={user} />}
                        {user.state && <UserForm userValue={user} onUserInput={usermodificationHandler}/>}

                        <div className="cell cell-text">
                            {!user.state && (<span onClick={() => showEditForm(user.id)}><MdEditCalendar /></span>)}
                            {user.state && (<span onClick={() => submitForm(user.id)}><MdDone /></span>)}
                            <span style={{ marginLeft: '30px'}} onClick={() => deleteUserHandler(user.id)}><MdDeleteOutline /></span>
                        </div>
                    </div>
                )
            })}

            <div className='pagination'>
                <Stack spacing={2}>
                    <Pagination
                        count={count}
                        size="large"
                        page={page}
                        variant="outlined"
                        shape="circular"
                        onChange={handleChange}
                        color="primary" showFirstButton showLastButton />
                </Stack>
            </div>
        </div>
    );
}

export default UserList;


