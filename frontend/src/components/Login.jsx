import React from "react";
import { Link } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  // useForm hook to register the form and handle the form submission
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit=(data) => console.log(data);
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          //  alert("Login successfully")
          // that react library is used to show the toast message
          toast.success("Login successfully");
          setTimeout(() => {
            document.getElementById("my_modal_3").close();
            window.location.reload();
            // stroe the user data in local storage for further use in course section   for only enrolled user
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          // alert("Error:", + err.response.data.message)
          toast.error("Error:", +err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };

  return (
    <div>
      {/* take daisyUI modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                className="w-80 px-3 rounded-md outline-none "
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              <br />
              {/* errors will return when field validation fails  */}
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                className="w-80 px-3 rounded-md outline-none "
                placeholder="Enter your Password"
                {...register("password", { required: true })}
              />
              <br />
              {/* errors will return when field validation fails  */}
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                login
              </button>
              <p>
                Not registered yet?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  SignUp
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
