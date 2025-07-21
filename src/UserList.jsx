import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:3000/users");
        const data = await res.json();
        setUsers(data);
      } catch {
        setUsers([]);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  const editUser = async (id)=>{

    navigate("/edit/"+id)
    // let res = await fetch(`http://localhost:3000/users/${id}`, {
    //     method: "PUT",
    //   });
    //   res = await res.json();
    //   if (res) {
    //     alert("record deleted");
    //   }
    
  }

  const deleteUser = async (id) => {
    let res = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });
    res = await res.json();
    if (res) {
      alert("record deleted");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h2
        style={{
          fontWeight: "bold",
          fontSize: "2.5rem",
          marginBottom: "2rem",
          color: "#2563eb",
          letterSpacing: "1px",
          textAlign: "center",
          textShadow: "0 2px 8px #e0e7ef",
        }}
      >
        User List
      </h2>
      {loading ? (
        <div style={{ fontSize: "1.5rem", color: "#888", textAlign: "center" }}>
          Loading...
        </div>
      ) : users.length === 0 ? (
        <div
          style={{ fontSize: "1.2rem", color: "#f43f5e", textAlign: "center" }}
        >
          No users found.
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {users.map((user, idx) => (
            <div
              key={user.id || idx}
              style={{
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 2px 12px rgba(37,99,235,0.08)",
                padding: "1.5rem",
                transition: "transform 0.15s, box-shadow 0.15s",
                border: "1px solid #e5e7eb",
                cursor: "pointer",
                minHeight: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                position: "relative",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-4px) scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 6px 24px rgba(37,99,235,0.13)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 2px 12px rgba(37,99,235,0.08)";
              }}
            >
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "1.2rem",
                  color: "#2563eb",
                  marginBottom: "0.5rem",
                }}
              >
                {user.name}
              </span>
              {user.email && (
                <span
                  style={{
                    color: "#64748b",
                    fontSize: "1rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  {user.email}
                </span>
              )}
              {user.age && (
                <span
                  style={{
                    color: "#059669",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                  }}
                >
                  {user.age}
                </span>
              )}
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  marginTop: "1rem",
                  alignSelf: "flex-end",
                }}
              >
                <button
                  type="button"
                  style={{
                    background: "#3b82f6",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "0.5rem 1.1rem",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(59,130,246,0.08)",
                    transition: "background 0.15s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "#1d4ed8")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "#3b82f6")
                  }
                  onClick={()=>editUser(user.id)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  style={{
                    background: "#f43f5e",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "0.5rem 1.1rem",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(244,63,94,0.08)",
                    transition: "background 0.15s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "#be123c")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "#f43f5e")
                  }
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
