function Tweet({ username, name, date, message }) {
  const tweetStyles = {
    backgroundColor: "grey",
    border: "2px solid",
  };

  return (
    <div style={tweetStyles}>
      <p>{username}</p>
      <p>{name}</p>
      <p>{message}</p>
      <p>{date}</p>
    </div>
  );
}
