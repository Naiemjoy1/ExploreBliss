import { useEffect } from "react";
import useAuth from "../Hooks/useAuth";

const UserDetails = () => {
  const { user } = useAuth();

  useEffect(() => {
    document.title = "User";
  }, []);

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
      <div className="text-center grid grid-cols-1">
        <p className="mb-2">Name: {user?.displayName || "User"}</p>
        <p className="mb-2">Email: {user?.email || "Email"}</p>
        <p className="mb-2">Photo URL: {user?.photoURL || "Photo URL"}</p>
      </div>
    </div>
  );
};

export default UserDetails;
