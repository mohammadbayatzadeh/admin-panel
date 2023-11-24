import React from "react";

function Filter() {
  return (
    <select className="p-2 mb-2 mr-1 rounded-lg self-end">
      <option value="all">select category</option>
      <option value="electronic">electronic</option>
      <option value="jewerly">jewerly</option>
      <option value="men's clothing">men's clothing</option>
      <option value="women's clothing">women's clothing</option>
    </select>
  );
}

export default Filter;
