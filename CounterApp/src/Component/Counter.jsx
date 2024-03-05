import React from "react";

function Counter({ count, increment, decrement }) {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="flex rounded justify-center items-center w-[50%] h-72 bg-red-100">
        <div className="flex flex-wrap rounded min-h-52 w-[50%] bg-red-600">
          <div className="flex justify-center items-center w-full">
            <p className="text-white text-2xl mt-10">{count}</p>
          </div>
          <div className="flex gap-10 mb-10 sm:flex-row  m-auto text-white ">
            <button
              className="bg-white text-black w-25 sm:flex-col h-auto rounded mb-2 sm:mb-0"
              onClick={increment}
            >
              increase
            </button>
            <button
              className="bg-white text-black sm:flex-col w-25 h-auto rounded"
              onClick={decrement}
            >
              Decrease
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
