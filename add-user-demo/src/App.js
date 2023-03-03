import React, { useState } from "react";
import AddUser from "./users/AddUser";
import DisplayUsers from "./users/DisplayUsers";

const usersList = [];

function App() {
  const [userData, setUserData] = useState(usersList);

  const addNewUser = (data) => {
    setUserData((previousData) => {
      return [data, ...previousData];
    });
  };

  return (
    // to solve <div> soup
    <React.Fragment>
      <AddUser onUserAdded={addNewUser} />
      <DisplayUsers items={userData} />
    </React.Fragment>
  );
}

export default App;
