import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//elements
import AuthInput from "../../elements/AuthInput";

//functions
import { helper } from "../../../utils/functions";

//constants
import { ERR_MSG } from "../../../utils/constants";

function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!helper.checkEmail(form.email)) {
      setError(ERR_MSG.EMAIL);
    } else if (form.password.length < 7) {
      setError(ERR_MSG.PASSWORD);
    } else {
      setError("");
      console.log(form);
      navigate("/");
    }
  };

  return (
    <div className=" w-full flex items-center justify-center">
      <div className="w-full max-w-[500px] bg-text-color-secondary rounded-lg shadow md:mt-0 xl:p-0">
        <div className="w-full p-6 space-y-4 md:space-y-6 sm:p-8 ">
          <h1 className="text-xl font-bold text-bg-color-primary md:text-2xl">
            Sign up your account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
            {error && (
              <p className="w-full text-center text-white bg-text-color-tertiary rounded">
                {error}
              </p>
            )}
            <AuthInput
              name="email"
              form={form}
              setForm={setForm}
              placeholder="name@company.com"
            />
            <AuthInput
              name="password"
              form={form}
              setForm={setForm}
              placeholder="••••••••"
            />

            <button
              type="submit"
              disabled={
                helper.isEmpty(form.email) || helper.isEmpty(form.password)
              }
              className="w-full text-text-color-secondary bg-bg-color-primary transition-all duration-500 opacity-80 hover:opacity-100 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-30  "
            >
              Sign up
            </button>
            <p className="text-sm font-light text-gray-500 text-center">
              Have an account yet?{" "}
              <Link
                to="/login"
                className="font-medium text-text-color-tertiary hover:underline"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
