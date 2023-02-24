import { useState } from 'react';
import './App.css';
import AssemblyAll from './components/Assembly';
import jsonElement from 'https://github.com/netology-code/ra16-homeworks/blob/0936a035de10f3ca9b14ad9dbdb702c82bebab0e/props/listing/data/etsy.json#L1';

const Listing = (props) => {
  const items = JSON.parse(props.items);

    return (
      <AssemblyAll items={items} />
    )  
}

function App() {

  return (
    <>
      <Listing items={jsonElement} />
    </>
  )
}

export default App
