import React, { useState } from "react";

function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-center border-2 border-blue-600">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Rating: {product.rating}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}
function LoadMore({ limit = 30 }) {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://dummyjson.com/products/?limit=${limit}&skip=${skip}&select=title,id,thumbnail,category,price,rating`
      );
      const json = await res.json();
      setData(json.products || []);
    }
    fetchData();
  }, [setSkip, skip]);

  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-3 gap-1">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div>
        <button onClick={() => setSkip(skip + 10)}> Load More</button>
      </div>
    </div>
  );
}

export default LoadMore;
