const Notification = ({ message, success }) => {
  console.log(message == null);
  if (message === null) {
    return null;
  }

  return <div className={success ? "success" : "error"}>{message}</div>;
};

export default Notification;
