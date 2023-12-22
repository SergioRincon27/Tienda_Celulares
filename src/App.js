import React from 'react'
import { Carrito } from "./components/Carrito";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
import Pages from "./components/Page.js";
import "boxicons";
import Page from './components/Page.js';
import { Header } from 'components/Header';

function App() {

  return (
    <DataProvider>
    <div className="App">
    <Page/>
    </div>
    </DataProvider>
  );
}

export default App;
