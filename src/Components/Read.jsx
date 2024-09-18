import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  const[tabledark,setTabledark] = useState("")

  const getData = async () => {
    try {
      const response = await axios.get("https://66e24eff494df9a478e15ed3.mockapi.io/crud-react");
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []); // Empty dependency array ensures this runs only once
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://66e24eff494df9a478e15ed3.mockapi.io/crud-react/${id}`);
      getData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  }

  return (
    <div className='container'>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={(() => {
    if(tabledark === 'table-dark'){setTabledark("")}
    else {
      setTabledark("table-dark")
    }
  })}/>
</div>
    <div className='d-flex justify-content-between'>
      <p><strong style={{ fontSize: "25px"}}>Read Operation</strong></p>
        <Link to="/">
          <button type="submit" className="btn btn-primary">Create</button>
        </Link>
      </div>
    <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((curElem) => (
            <tr key={curElem.id}>
              <th scope="row">{curElem.id}</th>
              <td>{curElem.name}</td>
              <td>{curElem.email}</td>
              <td>
                <Link to="/update" style={{ color: "white", textDecoration: "none" }}>
                  <button 
                    className='btn btn-success'
                    onClick={() => setToLocalStorage(curElem.id, curElem.name, curElem.email)}
                  >
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button className='btn btn-danger' onClick={() => handleDelete(curElem.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
