import React, { useMemo, useState } from 'react';
import './UserList.css'
import '../Pagenation/Pagenation.css'
import { Checkbox } from '@mui/material';
import usePagination from "../Pagenation/pagination";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { MdEditCalendar, MdDeleteOutline } from "react-icons/md";

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
                        <div className="cell cell-text">{user.name}</div>
                        <div className="cell cell-text">{user.email}</div>
                        <div className="cell cell-text">{user.role}</div>
                        <div className="cell cell-text">
                            <span >
                                <MdEditCalendar style={{ 'margin-right': '30px' }} />
                            </span>
                            <span onClick={() => deleteUserHandler(user.id)}>
                                <MdDeleteOutline />
                            </span>

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


