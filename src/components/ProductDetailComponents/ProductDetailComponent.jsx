import { Col, Image, InputNumber, Row } from "antd";
import React from "react";
import images from "../../assets/images/test.webp";
import imageSmall from "../../assets/images/imgSmall.webp";
import {
  WarperStyleNameProduct,
  WrapperAddressProduct,
  WrapperBtnQualityProduct,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleTextSell,
} from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
export const ProductDetailComponent = () => {
  const onchange = () => {};
  return (
    <div style={{ padding: "16px", background: "#fff" }}>
      <Row>
        <Col span={10}>
          <Image src={images} alt="image product" preview={true} />
          <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageSmall}
                alt="image product"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageSmall}
                alt="image product"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageSmall}
                alt="image product"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageSmall}
                alt="image product"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageSmall}
                alt="image product"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageSmall}
                alt="image product"
                preview={false}
              />
            </WrapperStyleColImage>
          </Row>
        </Col>
        <Col span={14}>
          <WarperStyleNameProduct>
            Book - famous detective - conan - combo 10 set 81 to 91
          </WarperStyleNameProduct>
          <div>
            <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
            <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
            <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
            <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
            <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
            <WrapperStyleTextSell> | sold 1000+ </WrapperStyleTextSell>
          </div>
          <WrapperPriceProduct>
            <WrapperPriceTextProduct>200.000VND</WrapperPriceTextProduct>
          </WrapperPriceProduct>
          <WrapperAddressProduct>
            <span>Ship to </span>
            <span className="address">
              Q . 1, P. Ben Nghe, Ho Chi Minh City
            </span>
            <span className="change-address"> Change address</span>
          </WrapperAddressProduct>
          <WrapperQualityProduct>
            <div>Quality</div>
            <WrapperQualityProduct>
              <WrapperBtnQualityProduct>
                <PlusOutlined style={{ color: "#000", fontsize: "15px" }} />
              </WrapperBtnQualityProduct>
              <WrapperInputNumber
                defaultValue={1}
                onChange={onchange}
                size="small"
              />
              <WrapperBtnQualityProduct>
                <MinusOutlined style={{ color: "#000", fontsize: "15px" }} />
              </WrapperBtnQualityProduct>
            </WrapperQualityProduct>
          </WrapperQualityProduct>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailComponent;
