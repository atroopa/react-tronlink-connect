import { useState } from "react";
import ProductList from "./components/ProductList";
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TronWeb from 'tronweb';
import ConnectButton from './components/ConnectButton';
import { setTronWeb } from '../actions/tronWeb';



function App() {

const [products, setProducts] = useState([
    {id: 1, title: 'fucking apple wtach', price: "$600"},
    {id: 2, title: 'asshole apple wtach', price: "$390"},
    {id: 3, title: 'pusssy apple wtach', price: "$520"},
    {id: 4, title: 'dick apple wtach', price: "$740"}
  ]);


    const dispatch = useDispatch();

    useEffect(() => {
      const tronWeb = new TronWeb({
        fullNode: 'https://api.trongrid.io',
        solidityNode: 'https://api.trongrid.io',
        eventServer: 'https://api.trongrid.io',
      });
      dispatch(setTronWeb(tronWeb));
    }, [dispatch]);

    const connectTronLink = async () => {
      try {
        await window.tronWeb.connect();
        const tronWeb = window.tronWeb;
        dispatch(setTronWeb(tronWeb));
      } catch (error) {
        console.error(error);
      }
    };  

  return (
    <div >
      <ConnectButton connect={connectTronLink} />
      <ProductList products={products} />
    </div>
  );
}

export default App;