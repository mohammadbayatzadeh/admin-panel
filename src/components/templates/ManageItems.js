import React, { useEffect, useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../features/items/itemsSlice";

//comps
import ItemCard from "../modules/ItemCard";
import Loading from "../modules/Loading";
import Filter from "../elements/Filter";

function ManageItems() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.items);
  const [category, setCategory] = useState("all");
  const [filtered, setFiltered] = useState({});

  useEffect(() => {
    dispatch(getItems());
  }, []);

  useEffect(() => {
    let tempData = [...data];
    tempData = tempData.filter((item) => {
      if (category === "all") {
        return item;
      } else {
        return item.category === category;
      }
    });
    setFiltered(tempData);
  }, [category]);
  const allProducts = filtered.length ? filtered : data;
  if (loading) return <Loading />;
  return (
    <div className="w-full flex flex-col items-center">
      <Filter setCategory={setCategory} />
      <div className="w-full mx-2 flex justify-between items-start flex-wrap">
        {data.length > 0 ? (
          allProducts.map((item) => <ItemCard key={item.id} {...item} />)
        ) : (
          <p className="w-full bg-text-color-tertiary text-text-color-secondary text-center p-2 rounded-lg">
            There is some error in fetching data ...
          </p>
        )}
      </div>
    </div>
  );
}

export default ManageItems;
