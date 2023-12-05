function AuthInput({ name, form, placeholder, setForm }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value.trim() });
  };
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-bg-color-primary "
      >
        Your email
      </label>
      <input
        type={name === "email" ? "text" : "password"}
        name={name}
        value={form[name]}
        onChange={changeHandler}
        className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:border-text-bg-color-primary w-full p-2.5 "
        placeholder={placeholder}
      />
    </div>
  );
}

export default AuthInput;
