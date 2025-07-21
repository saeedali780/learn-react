import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    const {id}= useParams();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [age,setAge]=useState("");
    const url = `http://localhost:3000/users/${id}`;
    const navigate = useNavigate();
    useEffect(()=>{
        getUserData()
    },[])
    const  getUserData = async ()=>{
        console.log(id);
       
        let res = await fetch(url);
        res = await res.json()
        console.log(res);
        setName(res.name);
        setEmail(res.email);
        setAge(res.age);    
    };
    const updateUser = async ()=>{
         console.log(name,age,email);
         let res = await fetch(url,{
            method:"PUT",
            body:JSON.stringify({name,email,age})
         });
         res = await res.json();
         console.log(res);
         if (res) {
            alert("user data updated");
            navigate('/')
         }
         
    } 

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "400px",
        margin: "2rem auto",
        border: "1px solid #eee",
        borderRadius: "10px",
        background: "#fff",
        boxShadow: "0 2px 12px rgba(37,99,235,0.08)",
      }}
    >
      <h2
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          marginBottom: "1.5rem",
          color: "#2563eb",
          textAlign: "center",
        }}
      >
        Edit User
      </h2>
      <form>
        <div style={{ marginBottom: "1.2rem" }}>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "500",
            }}
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            style={{
              width: "100%",
              padding: "0.6rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
        </div>
        <div style={{ marginBottom: "1.2rem" }}>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "500",
            }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
             onChange={(e)=>setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "0.6rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "500",
            }}
          >
            Age
          </label>
          <input
            type="text"
            placeholder="Enter age"
            value={age}
            onChange={(e)=>setAge(e.target.value)}
            style={{
              width: "100%",
              padding: "0.6rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
        </div>
        <button
          type="button"
          style={{
            width: "100%",
            padding: "0.8rem",
            background: "#2563eb",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.1rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
            transition: "background 0.15s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#1d4ed8")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#2563eb")}
          onClick={updateUser}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
