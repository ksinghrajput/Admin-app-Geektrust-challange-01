import './App.css';
import { getAllUsers } from './service/adminApi';
import { useState, useEffect } from 'react'
import Filter from './component/Searchbar/Filter';
import UserList from './component/UserList/UserList';
import PaginationOutlined from './component/Pagenation/PagenationOutline';

function App() {

  const [adminList, setAdminList] = useState([]);
  const [enteredValue, setEnteredValue] = useState('');

  useEffect(() => {
    let mounted = true;
    getAllUsers()
      .then(items => {
        if (mounted) {
          setAdminList(items)
          console.log(items)
        }
      })
    return () => mounted = false;
  }, [])

  const inputFieldHandler = (enteredValue) => {
    setEnteredValue(enteredValue);
  }

  return (
    <div className="App">
      <Filter onFilterChange={inputFieldHandler}/>
      <UserList adminList={adminList} enteredValue={enteredValue} />
      <PaginationOutlined />
    </div>
  );
}

export default App;
