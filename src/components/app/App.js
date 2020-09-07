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
      setProducts(state => ([...products, result]))
      // console.log("PRODUCTS", res.data)
      for (let product of res.data) {
        console.log(product)
        if (categories.indexOf(products.category == -1)) {
          setCategories([...categories, product.category]);
        }
      }
      })
  }, [])
  console.log("products", products)
  console.log(categories)
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
