import axios from 'axios';
import Category from './Category';
import { useEffect, useState } from 'react';
import ProductItems from './ProductItems';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

function App() {
  const [finalCategory, setFinalCategory] = useState([]);
  const [finalProduct, setFinalProduct] = useState([]);
  const [catName, setCatName] = useState("");

  useEffect(() => {
    getCategory();
    fakeCategory();
    getProduct();
  }, []);

  useEffect(() => {
    if (catName !== "") {
      axios
        .get(`https://fakestoreapi.com/products/category/${catName}`)
        .then((res) => res.data)
        .then((finalData) => {
          setFinalProduct(finalData);
        });
    }
  }, [catName]);

  const getCategory = () => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setFinalCategory(res.data);
    });
  };
  const fakeCategory = ()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res) => {
      const categories = res.data.map((item) => item.name); 
      setFinalCategory((prevCategory) => [...prevCategory, ...categories]); 
      })
  }

  const getProduct = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setFinalProduct(res.data);
    });
  };

  const pItems = finalProduct.map((p, i) => (
    <ProductItems key={i} pdata={p} />
  ));

  return (
    <div className="bg-ivory min-h-screen">
      <Header />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 mt-10">
          <div className="col-span-3">
            <Category finalCategory={finalCategory} setCatName={setCatName} />
          </div>
          <div className="col-span-9 bg-slate-100 p-5">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{catName || "All Products"}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {finalProduct.length ? pItems : <p>No products found.</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;