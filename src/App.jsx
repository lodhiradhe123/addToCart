import React, { useState } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";

function App() {
  var data = [
    { name: "radhe", description: "anything", image: "images" },
    { name: "kridhna", description: "mathura", image: "images" },
    { name: "kishori", description: "vrindavan", image: "images" },
    { name: "ladaliji", description: "alliswell", image: "images" },
    { name: "bihari", description: "everything", image: "images" },
  ];

  var [val, setval] = useState(data);

  return (
    <>
      <Nav />
      <div className="p-3 flex gap-5 mb-5 justify-center items-center shrink-0 flex-wrap">
        {val.map((ele,index) => (
          <Card card={ele} index={index} />
        ))}
      </div>
    </>
  );
}

export default App;
