import { createContext, useContext } from "react";

const UserContext = createContext({
    loggedInUserName: "Default",
    age: 20
});

export default UserContext;
