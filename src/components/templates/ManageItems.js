import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../features/items/itemsSlice";
import ItemCard from "../modules/ItemCard";
import styles from "./ManageItems.module.css";
function ManageItems() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.items);
  console.log(data);
  useEffect(() => {
    dispatch(getItems());
  }, []);
  if (loading) <h2>loading...</h2>;
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <ItemCard {...item} />
      ))}
    </div>
  );
}

export default ManageItems;
