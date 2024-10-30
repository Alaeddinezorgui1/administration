import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [username, setUsername] = useState('');

  const addUser = async () => {
    try {
      await axios.post('http://localhost:5000/users/add', { username });
      alert('User added successfully!');
    } catch (error) {
      console.error(error);
      alert('Error adding user.');
    }
  };

  return (
    <div>
      <h1>Add User</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button onClick={addUser}>Add</button>
    </div>
  );
};

export default App;
