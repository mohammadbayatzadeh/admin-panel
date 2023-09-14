import React, { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../features/items/itemsSlice";

//comps
import ItemCard from "../modules/ItemCard";
import Loading from "../modules/Loading";

//styles
import styles from "./ManageItems.module.css";

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
