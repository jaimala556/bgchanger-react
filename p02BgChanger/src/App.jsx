import React, { useState } from "react";

const App = () => {
  const [bgColor, setBgColor] = useState("bg-slate-500");

  return (
    <div className={`w-screen h-screen ${bgColor}`}>
      <div className="w-screen h-16 bg-slate-50 fixed bottom-0">
        <div className="flex justify-center flex-wrap flex-row gap-2 p-3">
          <button
            onClick={() => setBgColor("bg-slate-300")}
            className="outline-none px-3 py-2 bg-slate-300 rounded-xl "
          >
            Gray
          </button>
          <button
            onClick={() => setBgColor("bg-red-500")}
            className="outline-none px-3 py-2 bg-red-500 rounded-xl text-white"
          >
            Red
          </button>
          <button
            onClick={() => setBgColor("bg-green-700")}
            className="outline-none px-3 py-2 bg-green-700 rounded-xl text-white"
          >
            Green
          </button>
          <button
            onClick={() => setBgColor("bg-amber-200")}
            className="outline-none px-3 py-2 bg-amber-200 rounded-xl text-white"
          >
            Yellow
          </button>
          <button
            onClick={() => setBgColor("bg-blue-900")}
            className="outline-none px-3 py-2 bg-blue-900 rounded-xl text-white"
          >
            Blue
          </button>
          <button
            onClick={() => setBgColor("bg-stone-950")}
            className="outline-none px-3 py-2 bg-stone-950 rounded-xl text-white"
          >
            Black
          </button>
          <button
            onClick={() => setBgColor("bg-rose-700")}
            className="outline-none px-3 py-2 bg-rose-700 rounded-xl text-white"
          >
            Rose
          </button>
          <button
            onClick={() => setBgColor("bg-yellow-400")}
            className="outline-none px-3 py-2 bg-yellow-400 rounded-xl text-white"
          >
            Gold
          </button>
          <button
            onClick={() => setBgColor("bg-indigo-600")}
            className="outline-none px-3 py-2 bg-indigo-600 rounded-xl text-white"
          >
            Sky blue
          </button>
          <button
            onClick={() => setBgColor("bg-fuchsia-800")}
            className="outline-none px-3 py-2 bg-fuchsia-800 rounded-xl text-white"
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
