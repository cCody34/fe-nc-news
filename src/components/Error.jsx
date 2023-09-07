const Error = ({ errCode, errMsg }) => {
  console.log(errCode, "<<<<CODE IN ERROR COMPONENT");
  console.log(errMsg, "<<<IN ERROR COMPONENT");
  return (
    <h2 className="error-msg">
      {errCode} Error: {errMsg}
    </h2>
  );
};

export default Error;
