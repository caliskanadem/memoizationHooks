import React from "react";

const User = ({ userData }) => {
  console.log("User component re-render");
  return (
    <div>
      User
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
};

export default React.memo(User);
