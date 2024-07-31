import React from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination } from "antd";
import { WrapperProducts, WrapperNavbar, WrapperRow } from "./type";

const TypeProductPage = () => {
  const onChange = () => {
  };

  return (
    <div style={{ padding: '0 120px', background: '#efefef' }}>
      <WrapperRow>
        <WrapperNavbar>
          <NavbarComponent />
        </WrapperNavbar>
        <Col span={20}>
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{textAlign:"center",marginTop:"10px" }}/>
        </Col>
      </WrapperRow>
    </div>
  );
};

export default TypeProductPage;
