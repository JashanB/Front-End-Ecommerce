import React, { useEffect, useState } from 'react';
import './App.css';

const axios = require('axios');


function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res => {
      let result = res.data
      //set products to pass down as props
      setProducts(state => ([...products, result]))
      //grab all categories to list out 
      for (let product of res.data) {
        let array = categories
        array.push(product.category)
        const filteredArray = new Set(array)
        setCategories(state => ([...filteredArray]));
      }
      })
  }, [])
  console.log("products", products)
  console.log("categories", categories)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React app woo
        </p>
      </header>
    </div>
  );
}

export default App;
