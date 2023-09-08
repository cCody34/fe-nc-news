import { useEffect, useState } from "react";
import { getUserByName } from "../../api";
import { useParams } from "react-router-dom";
import Error from "../Error";

const SingleUser = () => {
  const { username } = useParams();
  const [singleUser, setSingleUser] = useState({});
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getUserByName(username)
      .then(({ data }) => {
        setSingleUser(data);
        setIsError(false);
      })
      .catch((err) => {
        setIsError(err);
      });
  }, []);

  if (isError) {
    if (isError.response.data.msg) {
      return (
        <Error
          errCode={isError.response.status}
          errMsg={isError.response.data.msg}
        />
      );
    } else {
      return (
        <Error errCode={isError.response.status} errMsg={isError.message} />
      );
    }
  }

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
