import { createContext, useContext,useState } from "react";

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState("");
  
    const signIn = (username, password) => {
      const correctPassword = "123";
      if (password === correctPassword) {
        setProfile({ username });
      } else {
        setError("Incorrect password. Please try again.");
        setProfile(null);
      }
    };
  
    return (
      <UserContext.Provider value={{ profile, error, signIn }}>
        {children}
      </UserContext.Provider>
    );
  };

  export const useUser = () => {
    return useContext(UserContext);
  };