import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';

const Homepage = () => {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState('')

  const InputHandler = (e) => {
    setValue(e.target.value);
  }

  const getUsers = async () => {
    const response = await axios.get('../users.json');
    setUsers(response.data.results);
  }

  const deleteUser = (index) => {
    setUsers(oldUsers => oldUsers.filter((user, existsIndex) => existsIndex !== index ))
  }

  useEffect(() => {
    getUsers();
  }, [])
  return (
    <div className='main mt-2'>
        <div>
            <input onChange={InputHandler} type="text" placeholder='Search..' className='form-control w-50 mx-auto mt-3' />
        </div>
      <table className='table table-striped container mt-3'>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">City</th>
          <th scope="col">Gender</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {users.filter(users => users.name.first.includes(value)).map( (user, index) => {
          return (<tr key={index}>
            <td>{user.fname}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <button className='btn btn-danger me-3' onClick={() => deleteUser(index)}><MdDelete /> Delete </button>
            </td>
          </tr>)
        })

        }
      </tbody>
    </table></div>
  )
}

export default Homepage
