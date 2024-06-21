import React from "react";

function Nav() {
  return <div className="w-full h-12 bg-zinc-500 text-white flex justify-between items-center text-2xl font-semibold px-6">
    <h1>Home</h1>
    <h1 className="text-green bg-orange-400 p-3 rounded flex items-top justify-center">cart-1 </h1>
  </div>;
}

export default Nav;
