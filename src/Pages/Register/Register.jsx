import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Components/Hooks/useAuth";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password, image, fullName } = data;
    createUser(email, password).then((result) => {
      updateUserProfile(fullName, image);
      console.log(result);
    });
  };
  return (
    <div className=" w-2/5 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="name"
            name="name"
            placeholder="your name"
            className="input input-bordered"
            {...register("fullName", { required: true })}
          />
          {errors.fullName && (
            <span className=" text-red-500">This field is required</span>
          )}
        </div>
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
            <span className="label-text">Image Url</span>
          </label>
          <input
            type="imageUrl"
            name="image"
            placeholder="imageUrl"
            className="input input-bordered"
            {...register("image", { required: false })}
          />
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
        </div>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div> */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p className=" text-center">
          Already have account? Please
          <Link to="/login">
            <button className="btn btn-link">Login</button>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
