import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../features/items/itemsSlice";
function ManageItems() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.items);
  console.log(data);
  useEffect(() => {
    dispatch(getItems());
  }, []);
  return <div>ManageItems</div>;
}

export default ManageItems;
