import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  

  const history = useNavigate();

  // Define headers here
  const headers = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    console.log('Clicked');
    e.preventDefault();

    axios.post(
      'https://66e24eff494df9a478e15ed3.mockapi.io/crud-react',
      { name, email }, // Data to be sent
      { headers } // Config object for headers
    )
    .then(response => {
      console.log('Response:', response);
      // Handle success (e.g., clear form, show message)
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error
    })
    .then(() => {
      history("/read")
    })
  };

  return (
    <div className='container'>
      <div className='d-flex justify-content-between'>
        <p><strong style={{fontSize:"25px"}}>Create React Form</strong></p>
        <Link to="/read">
         <button type="submit" className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Create;
