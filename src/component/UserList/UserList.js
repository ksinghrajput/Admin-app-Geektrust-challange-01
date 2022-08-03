import React, { useState } from 'react';
import './UserList.css'
import '../Pagenation/Pagenation.css'
import { Checkbox } from '@mui/material';
import usePagination from "../Pagenation/pagination";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const UserList = (props) => {
    const { adminList, enteredValue } = props;
    let [page, setPage] = useState(1);
    var filteredList = [];
    const PER_PAGE = 10;

    if (enteredValue) {
        filteredList = adminList.filter(item => item.name.includes(enteredValue) || item.email.includes(enteredValue) || item.role.includes(enteredValue))
    } else {
        filteredList = adminList;
    }

    const count = Math.ceil(filteredList.length / PER_PAGE);

    const _adminList = usePagination(filteredList, 10);

    const handleChange = (e, p) => {
        setPage(p);
        _adminList.jump(p);
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
                        <div className="cell cell-text">Action</div>
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
                        color="primary" showFirstButton showLastButton  />
                </Stack>
            </div>


        </div>
    );
}

export default UserList;


