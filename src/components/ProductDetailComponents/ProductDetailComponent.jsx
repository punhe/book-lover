import { Col, Image, InputNumber, Row } from "antd";
import React from "react";
import images from "../../assets/images/test.webp";
import imageSmall from "../../assets/images/imgSmall.webp";
import {
  WarperStyleNameProduct,
  WrapperAddressProduct,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleTextSell,
} from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export const ProductDetailComponent = () => {
  const onChange = () => {};

  return (
    <div style={{ padding: "16px", background: "#fff" }}>
      <Row>
        <Col
          span={10}
          style={{
            borderRight: "1px solid #e5e5e5",
            paddingRight: "8px",
            borderRadius: "8px",
          }}
        >
          <Image src={images} alt="image product" preview={true} />
          <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
            {[...Array(6)].map((_, index) => (
              <WrapperStyleColImage span={4} key={index}>
                <WrapperStyleImageSmall
                  src={imageSmall}
                  alt={`image product ${index + 1}`}
                  preview={false}
                />
              </WrapperStyleColImage>
            ))}
          </Row>
        </Col>
        <Col span={14} style={{ paddingLeft: "10px" }}>
          <WarperStyleNameProduct>
            Book - famous detective - conan - combo 10 set 81 to 91
          </WarperStyleNameProduct>
          <div>
            {[...Array(5)].map((_, index) => (
              <StarFilled
                key={index}
                style={{ fontSize: "12px", color: "yellow" }}
              />
            ))}
            <WrapperStyleTextSell> | sold 1000+ </WrapperStyleTextSell>
          </div>
          <WrapperPriceProduct>
            <WrapperPriceTextProduct>200.000VND</WrapperPriceTextProduct>
          </WrapperPriceProduct>
          <WrapperAddressProduct>
            <span>Ship to </span>
            <span className="address">Q. 1, P. Ben Nghe, Ho Chi Minh City</span>
            <span className="change-address"> Change address</span>
          </WrapperAddressProduct>
          <div
            style={{
              margin: "10px 0px 20px",
              borderTop: "1px solid #e5e5e5",
              borderBottom: "1px solid #e5e5e5",
              padding: "10px 0",
            }}
          >
            <div style={{ marginBottom: "15px" }}>Quantity</div>
            <WrapperQualityProduct>
              <button style={{ border: "none", background: "transparent" }}>
                <PlusOutlined style={{ color: "#000", fontSize: "15px" }} />
              </button>
              <WrapperInputNumber
                defaultValue={1}
                min={0}
                className="ant-input-number-small"
                onChange={onChange}
                size="small"
              />
              <button style={{ border: "none", background: "transparent" }}>
                <MinusOutlined style={{ color: "#000", fontSize: "15px" }} />
              </button>
            </WrapperQualityProduct>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <ButtonComponent
              size={40}
              styleButton={{
                background: "rgb(255, 57, 69)",
                height: "40px",
                width: "220px",
                border: "none",
                borderRadius: "4px",
              }}
              bordered={false}
              textButton={"click to buy"}
              styleTextButton={{
                color: "#fff",
                fontSize: "15px",
                fontWeight: "700",
              }}
            />
            <ButtonComponent
              size={40}
              styleButton={{
                background: "#fff",
                height: "40px",
                width: "220px",
                border: "1px solid black",
                borderRadius: "4px",
              }}
              bordered={false}
              textButton={"Buy and pay laster"}
              styleTextButton={{ color: "rgb(12,92,182)", fontSize: "15px" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailComponent;
