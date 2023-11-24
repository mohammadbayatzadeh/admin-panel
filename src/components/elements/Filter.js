import React from "react";

function Filter({ setCategory }) {
  const onChange = (e) => {
    const { value } = e.target;
    setCategory(value);
  };
  return (
    <select className="p-2 mb-2 mr-1 rounded-lg self-end" onChange={onChange}>
      <option value="all">select category</option>
      <option value="electronics">electronics</option>
      <option value="jewelery">jewelery</option>
      <option value="men's clothing">men's clothing</option>
      <option value="women's clothing">women's clothing</option>
    </select>
  );
}

export default Filter;
