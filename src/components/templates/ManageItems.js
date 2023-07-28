import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../features/items/itemsSlice";
import ItemCard from "../modules/ItemCard";
import styles from "./ManageItems.module.css";
import Loading from "../modules/Loading";

function ManageItems() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.items);
  useEffect(() => {
    dispatch(getItems());
  }, []);

  if (loading) return <Loading />;
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ManageItems;
