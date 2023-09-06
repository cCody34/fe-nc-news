import { useContext } from "react";
import { UserContext } from "./contexts/User";

const UserCard = ({ user }) => {
  const { setUser } = useContext(UserContext);

  return (
    <button
      className="user-card"
      onClick={(event) => {
        event.preventDefault();
        setUser(user);
      }}
    >
      <h3 className="user-card-username">{user.username}</h3>
      <img className="user-card-avatar" src={user.avatar_url}></img>
      <p className="user-card-name">{user.name}</p>
    </button>
  );
};

export default UserCard;
