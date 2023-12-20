import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { increment } from "../redux/slice/Counter";
import { saveusers } from "../redux/slice/Counter";

const Home = () => {
  const [product, setProduct] = useState([]);
  const dipatch = useDispatch();
  const data = useSelector((state) => state.counterSlice.add);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((data) => setProduct(data.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(product);
  const saveBtn = (prod) => {
    dipatch(saveusers(prod));

    console.log(saveusers(prod));
  };
  return (
    <div>
      {/* <button onClick={() => dipatch(increment())}>click</button> */}
      <div className="card-container">
        {product.map((prod) => (
          <div className="card" key={prod.id}>
            <img className="image" src={prod.avatar} alt="" />
            <p className="name">{prod.first_name}</p>
            <button
              style={
                data.findIndex((data) => data.id === prod.id) !== -1
                  ? { backgroundColor: "red" }
                  : { backgroundColor: "green" }
              }
              className="btn"
              onClick={() => saveBtn(prod)}
            >
              save
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
