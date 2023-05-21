import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
 const [userList,setUserList]=useState([]);

 const addUser = (uName,uAge)=>{
  setUserList((prevUserList)=>{
    return [...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}];
  })
 }

  return (
    <div>
      <AddUser addUserToList={addUser}/>
      <UsersList users={userList}/>
    </div>
  );
}

export default App;
