import React from "react";

//icnos
import { VscWatch } from "react-icons/vsc";

//data
import { usersData } from "../../data/users/usersData";

function Message() {
  const data = usersData;
  return (
    <div className="w-full p-2.5 mb-[7px] flex items-center justify-start transition all rounded-lg hover:bg-bg-color-secondary">
      <img
        src={require(`../../data/users/${Math.floor(
          Math.random() * 10 + 1
        )}.jpg`)}
        alt="profile"
        className="w-[80px] h-[80px] mr-2.5 rounded-3xl"
      />
      <div>
        <p className="font-semibold mb-1">
          {data[Math.floor(Math.random() * 10)].name}
        </p>
        <p className="font-sm ml-1 opacity-9">
          {data[Math.floor(Math.random() * 10)].company.catchPhrase}
        </p>
        <p className="font-sm ml-1 opacity-9 flex items-center">
          <VscWatch />
          {Math.floor(Math.random() * 60)} mins ago
        </p>
      </div>
    </div>
  );
}

export default Message;
