import React from "react";

//data
import { usersData } from "../../data/users/usersData";

function SwiperItem() {
  const users = usersData;

  return (
    <div className="flex flex-col items-center bg-text-color-secondary h-[250px] w-[250px] text-text-color-primary">
      <img
        src={require(`../../data/users/${Math.floor(
          Math.random() * 6 + 1
        )}.jpg`)}
        alt="team member"
        className="w-full h-full rounded-3xl border-2 border-solid border-[var(--text-color-primary)]"
      />
      <p className="bg-text-color-secondary text-text-color-primary mt-2.5">
        {users[Math.floor(Math.random() * 10)].name}
      </p>
    </div>
  );
}

export default SwiperItem;
