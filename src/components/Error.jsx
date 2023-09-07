const Error = ({ errCode, errMsg }) => {
  return (
    <h2 className="error-msg">
      {errCode} Error: {errMsg}
    </h2>
  );
};

export default Error;
