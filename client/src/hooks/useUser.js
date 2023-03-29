import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({
  user: null,
  setUser: () => undefined,
  fetchUser: () => undefined,
  loading: true,
  initializing: true,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8001/is-user-loggedIn", {
        credentials: "include",
      });
      if (response.status === 200) {
        const data = await response.json();

        setUser(data);
      }
    } catch (e) {}
    setInitializing(false);
    setLoading(false);
  };

  useEffect(() => {
    fetchUser().then((r) => console.log(r));
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, fetchUser, loading, initializing }}
      children={children}
    />
  );
};

const useUser = () => useContext(UserContext);

export default useUser;
