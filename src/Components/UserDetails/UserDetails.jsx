import useAuth from "../Hooks/useAuth";

const UserDetails = () => {
  const { user } = useAuth();
  //   console.log(user);
  return (
    <div>
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img
            src={
              user?.photoURL ||
              "https://i.ibb.co/cFXnHG0/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg"
            }
          />
        </div>
      </div>
      <div>
        <p>Name: {user?.displayName || "user"}</p>
        <p>Email: {user?.email || "email"}</p>
        <p>PhotoUrl: {user?.photoURL || "url"}</p>
      </div>
    </div>
  );
};

export default UserDetails;
