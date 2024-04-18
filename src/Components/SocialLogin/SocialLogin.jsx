import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const SocialLogin = () => {
  const { googleLogin, githubLogin, twitterLogin } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate("/");
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const handleGithubLogin = async () => {
    try {
      await githubLogin();
      navigate("/");
    } catch (error) {
      console.error("GitHub login error:", error);
    }
  };

  const handleTwitterLogin = async () => {
    try {
      await twitterLogin();
      navigate("/");
    } catch (error) {
      console.error("Twitter login error:", error);
    }
  };

  return (
    <div className="">
      <div className="flex gap-4 justify-center items-center">
        <button onClick={handleGoogleLogin} className="btn">
          <span>
            <FcGoogle />
          </span>{" "}
          Google
        </button>
        <button onClick={handleGithubLogin} className="btn">
          <span>
            <FaGithub />
          </span>{" "}
          Github
        </button>
        <button onClick={handleTwitterLogin} className="btn">
          <span>
            <FaTwitter />
          </span>{" "}
          Twitter
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
