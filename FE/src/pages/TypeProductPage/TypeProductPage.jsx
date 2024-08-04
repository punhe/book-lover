import React from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination } from "antd";
import { WrapperProducts, WrapperNavbar, WrapperRow } from "./style";

const TypeProductPage = () => {
  const onChange = () => {
  };

  return (
    <div style={{ width: '100%', background: '#efefef' }}>
      <div style={{ width: '1270px', margin: '0 auto'}}>
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
    </div>
  );
};

export default TypeProductPage;
