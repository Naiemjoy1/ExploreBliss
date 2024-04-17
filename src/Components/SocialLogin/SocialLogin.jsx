import useAuth from "../Hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin, githubLogin, twitterLogin } = useAuth();
  return (
    <div className=" divider">
      {/* <p>continue with</p> */}
      <div className=" flex gap-4 justify-between items-center">
        <button onClick={() => googleLogin()} className="btn btn-primary">
          Google Login
        </button>
        <button onClick={() => githubLogin()} className="btn btn-primary">
          Github Login
        </button>
        <button onClick={() => twitterLogin()} className="btn btn-primary">
          Twitter Login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
