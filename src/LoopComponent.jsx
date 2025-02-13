import React from "react";

const LoopComponent = () => {
  const shoes = [
    {
      id: 1,
      brand: "Nike",
      price: 555,
      color: "red",
    },
    {
      id: 2,
      brand: "Adidas",
      price: 444,
      color: "blue",
    },
    {
      id: 3,
      brand: "Puma",
      price: 333,
      color: "white",
    },
  ];
  return (
    <div
      style={{
        border: "solid 1px black",
        padding: "10px",
        marginBottom: "5px",
      }}
    >
      {shoes.map((item) => {
        return (
          <div
            style={{
              border: "solid 1px black",
              padding: "10px",
              marginBottom: "5px",
            }}
            key={item.id}
          >
            <p>{item.brand}</p>
            <p>{item.price}</p>
            <p>{item.color}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LoopComponent;
