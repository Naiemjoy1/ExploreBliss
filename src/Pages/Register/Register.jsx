import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Components/Hooks/useAuth";
import { useEffect, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = "Register";
  }, []);

  const passwordValidation = (value) => {
    const regexUpperCase = /[A-Z]/;
    const regexLowerCase = /[a-z]/;

    if (!regexUpperCase.test(value)) {
      return "Password must contain at least one uppercase letter";
    }

    if (!regexLowerCase.test(value)) {
      return "Password must contain at least one lowercase letter";
    }

    if (value.length < 6) {
      return "Password must be at least 6 characters long";
    }

    return true;
  };

  const onSubmit = (data) => {
    const { email, password, image, fullName } = data;
    createUser(email, password)
      .then((result) => {
        if (image) {
          updateUserProfile(fullName, image);
        }
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className=" lg:w-2/5 mx-auto min-h-[calc(100vh-246px)]">
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
          <div className=" relative ">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered w-full"
              {...register("password", {
                required: true,
                validate: passwordValidation,
              })}
            />
            <span
              className=" absolute top-4 right-4"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoMdEye /> : <IoIosEyeOff />}
            </span>
          </div>
          {errors.password && (
            <span className=" text-red-500">{errors.password.message}</span>
          )}
        </div>
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
