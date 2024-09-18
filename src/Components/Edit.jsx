import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Edit = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    try {
      // Retrieve values from localStorage
      const storedId = localStorage.getItem('id');
      const storedName = localStorage.getItem('name');
      const storedEmail = localStorage.getItem('email');

      // Update state with retrieved values
      setId(storedId || '');
      setName(storedName || '');
      setEmail(storedEmail || '');
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`https://66e24eff494df9a478e15ed3.mockapi.io/crud-react/${id}`, {
        name: name,
        email: email
      })
      .then(() => {
        navigate("/read");
      })
      .catch((err) => console.log(err));
    } else {
      console.error('No ID available for update');
    }
  };

  return (
    <div className='container'>
      <p><strong style={{ fontSize: '25px' }}>Edit Form</strong></p>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
        <Link to="/read"><button type="submit" className="btn btn-secondary m-1">Back</button></Link>
      </form>
    </div>
  );
};

export default Edit;
