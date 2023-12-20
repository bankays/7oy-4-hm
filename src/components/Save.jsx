import React from "react";
import { useSelector } from "react-redux";

const Save = () => {
  const data = useSelector((state) => state.counterSlice.add);
  console.log(data);
  return (
    <div className="card-container">
      {data.map((data) => (
        <div className="card" key={data.id}>
          <img className="image" src={data.avatar} alt="" />
          <p className="name">{data.first_name}</p>
        </div>
      ))}
    </div>
  );
};

export default Save;
