import UserList from "../UserList";

const LogIn = () => {
  return (
    <form className="log-in">
      <h2>Which user would you like to log in as?</h2>
      <UserList />
    </form>
  );
};

export default LogIn;
