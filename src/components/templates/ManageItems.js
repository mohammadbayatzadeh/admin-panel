import React, { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../features/items/itemsSlice";

//comps
import ItemCard from "../modules/ItemCard";
import Loading from "../modules/Loading";

function ManageItems() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getItems());
  }, []);

  if (loading) return <Loading />;
  return (
    <div class=" w-full flex justify-around items-start flex-wrap">
      {data.length > 0 ? (
        data.map((item) => <ItemCard key={item.id} {...item} />)
      ) : (
        <p class="w-full bg-text-color-tertiary text-text-color-secondary text-center p-2 rounded-lg">
          There is some error in fetching data ...
        </p>
      )}
    </div>
  );
}

export default ManageItems;
