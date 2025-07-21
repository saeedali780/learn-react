import React, { useState } from 'react';

const AddUser = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [age,setAge]=useState("");



  const createUser = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    console.log(name, age, email);
    const url = "http://localhost:3000/users";
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, age, email })
    });
    response = await response.json();
    if (response) {
      alert("New User added");
    }
  };
  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: '2rem auto', border: '1px solid #eee', borderRadius: '8px' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem' }}>Add User</h2>
      <form onSubmit={createUser}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
          <input required type="text" placeholder="Enter name" onChange={(e)=> setName(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
          <input required type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Age</label>
          <input required type="text" placeholder="Enter Age" onChange={(e)=> setAge(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <button type="submit" style={{
          width: '100%',
          padding: '0.75rem',
          background: '#2563eb',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(37,99,235,0.08)',
          transition: 'background 0.15s',
        }}
        onMouseOver={e => e.currentTarget.style.background = '#1d4ed8'}
        onMouseOut={e => e.currentTarget.style.background = '#2563eb'}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;