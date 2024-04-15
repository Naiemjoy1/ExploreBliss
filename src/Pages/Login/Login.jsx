import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Components/Hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const { signInUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" w-2/5 mx-auto mb-10">
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
    </div>
  );
};

export default Login;
