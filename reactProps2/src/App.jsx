import { useState } from "react";
import "./App.css";
import AssemblyAll from "./components/Assembly";
import data from "./assets/data.json";

const Listing = (props) => {
  const items = props.items;

  return <AssemblyAll items={items} />;
};

function App() {
  return (
    <>
      <Listing items={data} />
    </>
  );
}

export default App;
