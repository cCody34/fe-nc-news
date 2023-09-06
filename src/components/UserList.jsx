import UserCard from "./UserCard";
import { useState, useEffect } from "react";
import { getUsers } from "../api";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(({ data }) => {
      setUsers(data.users);
    });
  }, []);

  return (
    <div className="user-list">
      {users.map((user) => {
        return <UserCard user={user} key={user.username} />;
      })}
    </div>
  );
};

export default UserList;
