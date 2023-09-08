import { useEffect, useState } from "react";
import { getUserByName } from "../../api";

const SingleUser = () => {
  const [singleUser, setSingleUser] = useState({});

  useEffect(() => {
    getUserByName("jessjelly").then(({ data }) => {
      console.log(data);
      setSingleUser(data);
    });
  }, []);

  const displayUserInfo = () => {
    return (
      <>
        <h2>{singleUser.name} Profile</h2>
        <p>Username: {singleUser.username}</p>
        <img src={singleUser.avatar_url}></img>
      </>
    );
  };

  return (
    <section>{singleUser.name ? displayUserInfo() : <p>Loading...</p>}</section>
  );
};

export default SingleUser;
