import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";

const HomePage = () => {
  const arr = ["TV", "Tu lanh", "Laptop"];
  return (
    <div style={{ padding: "0 120px" }}>
      <WrapperTypeProduct>
        {arr.map((item) => {
          return <TypeProduct name={item} key={item} />;
        })}
      </WrapperTypeProduct>
    </div>
  );
};

export default HomePage;
