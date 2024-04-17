import useAuth from "../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const SocialLogin = () => {
  const { googleLogin, githubLogin, twitterLogin } = useAuth();
  return (
    <div className="">
      {/* <p>continue with</p> */}
      <div className=" flex gap-4 justify-center items-center">
        <button onClick={() => googleLogin()} className="btn">
          <span>
            <FcGoogle />
          </span>{" "}
          Google
        </button>
        <button onClick={() => githubLogin()} className="btn ">
          <span>
            <FaGithub />
          </span>{" "}
          Github
        </button>
        <button onClick={() => twitterLogin()} className="btn">
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
