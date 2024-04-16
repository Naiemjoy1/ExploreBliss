import { useEffect } from "react";
import useAuth from "../Hooks/useAuth";

const UserDetails = () => {
  useEffect(() => {
    document.title = "User";
  }, []);
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-246px)]">
      <div className="avatar mb-4">
        <div className="w-24 rounded-full">
          <img
            src={
              user?.photoURL ||
              "https://i.ibb.co/cFXnHG0/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg"
            }
            alt="User avatar"
          />
        </div>
      </div>
      <div className="text-center">
        <p className="mb-2">Name: {user?.displayName || "user"}</p>
        <p className="mb-2">Email: {user?.email || "email"}</p>
        <p className="mb-2">PhotoUrl: {user?.photoURL || "url"}</p>
      </div>
    </div>
  );
};

export default UserDetails;
