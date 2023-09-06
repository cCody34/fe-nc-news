const UserCard = ({ user }) => {
  console.log(user);
  return (
    <section className="user-card">
      <h3 className="user-card-username">{user.username}</h3>
      <img className="user-card-avatar" src={user.avatar_url}></img>
      <p className="user-card-name">{user.name}</p>
    </section>
  );
};

export default UserCard;
