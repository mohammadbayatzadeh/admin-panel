import React, { useState } from "react";

function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col justify-center mx-auto">
      <div className="w-full bg-text-color-secondary rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold text-bg-color-primary md:text-2xl ">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-bg-color-primary "
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={changeHandler}
                className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:border-text-bg-color-primary w-full p-2.5 "
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-bg-color-primary "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={changeHandler}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:border-text-bg-color-primary w-full p-2.5 "
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-500">
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-bg-color-primary hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-text-color-secondary bg-bg-color-primary hover:bg-primary-700  focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 ">
              Don’t have an account yet?{" "}
              <a
                href="/register"
                className="font-medium text-text-color-tertiary hover:underline"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
