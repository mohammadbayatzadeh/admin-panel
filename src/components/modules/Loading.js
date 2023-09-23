import React from "react";

function Loading() {
  return (
    <div className="w-full flex justify-center items-center mt-12">
      <div className="flex w-[300px] h-[300px] bg-transparent">
        <span className="w-[200px] h-[200px] absolute border-2 border-solid border-bg-color-primary rounded-tr-full rounded-bl-full animate-spin "></span>
        <span className="w-[200px] h-[200px] absolute border-2 border-solid border-text-color-tertiary rounded-full  animate-bounce"></span>
        <span className="w-[200px] h-[200px] absolute border-2 border-solid border-text-color-primary rounded-br-full rounded-tl-full animate-spin"></span>
      </div>
    </div>
  );
}

export default Loading;
