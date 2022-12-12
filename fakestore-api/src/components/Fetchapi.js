import axios from 'axios'
import React, { useEffect, useState } from "react";

const UsingFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchLocation = async () => {
      const url = 'https://fakestoreapi.com/products'
      const res = await axios.get(url);
      setData(res.data);
      console.log(res.data);
    };
    fetchLocation();
  }, []);

  return (
    <div>
        <div className="abc">
          {data.map((item) => (
            <div className="container" key={item.id}>
              <h4>{item.title}</h4> <br />
              <img src={item.image} /> <br />
              <h5> Price : ₹{item.price}</h5>
            </div>
          ))}
        </div>
    </div>
  );
};

export default UsingFetch;
