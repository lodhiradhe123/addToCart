import React from "react";

function Card({card,index}) {
  var {name,description,image} = card;
  return (
    <div className="w-1/4  bg-zinc-200 rounded-lg p-2">
      <div className="flex gap-2">
        <div className="w-32 h-32 bg-pink-300 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWxzfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
        <div>
          <h1 className="mt-3 text-xl font-semibold capitalize font-[foldit]">
            {`${name}`}
          </h1>
          <h3 className="mt-3 text-xm font-semibold capitalize">
          {`${description}`}
          </h3>
        </div>
      </div>
      <button onClick={()=>{}} className="py-2 px-3 bg-blue-200 text-xs font-bold capitalize mt-4">
        add to cart
      </button>
    </div>
  );
}

export default Card;



