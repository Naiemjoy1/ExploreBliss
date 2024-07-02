import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Components/Hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Login = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    document.title = "Login";
  }, []);

  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login successful!");
        reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Email or password do not match!");
      });
  };

  return (
    <div className=" lg:w-2/5 mx-auto min-h-[calc(100vh-246px)]">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className=" text-red-500">This field is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className=" text-red-500">This field is required</span>
          )}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className=" text-center">
          New to here? Please
          <Link to="/register">
            <button className="btn btn-link">Register</button>
          </Link>
        </p>
        <div className=" text-center"></div>
      </form>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
