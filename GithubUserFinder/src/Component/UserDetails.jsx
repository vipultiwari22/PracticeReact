import React, { useEffect, useState } from "react";

function UserDetails() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = `https://api.github.com/users`;
    const fetchUsers = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="min-h-screen text-center bg-gray-600 text-white  ">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="m-4  border-none rounded text-center"
              name=""
              id=""
            />
          </div>
          <div className=" min-h-screen text-center grid md:grid-cols-3 bg-gray-600 text-white justify-around ">
            {users.map((user, index) => (
              <div key={index}>
                <p>Name: {user.login}</p>
                <p>Followers: {user.followers}</p>
                <img
                  className=""
                  src={user.avatar_url}
                  alt={`Git Picture ${index}`}
                  width={300}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDetails;