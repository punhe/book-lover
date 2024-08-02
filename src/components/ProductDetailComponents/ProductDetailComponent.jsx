import { Col, Image, Row } from 'antd';
import React from 'react';
import images from '../../assets/images/test.webp';
import imageSmall from '../../assets/images/imgSmall.webp';
import { WarperStyleNameProduct, WrapperAddressProduct, WrapperPriceProduct, WrapperPriceTextProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleTextSell } from './style';
import { StarFilled } from "@ant-design/icons";
export const ProductDetailComponent = () => {
  return (
    <div style={{ padding: '16px', background:'#fff'}}>
      <Row>
        <Col span={10}>
          <Image src={images} alt='image product' preview={true} />
          <Row style={{ paddingTop: '10px', justifyContent:'space-between' }}>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageSmall} alt='image product' preview={false} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageSmall} alt='image product' preview={false} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageSmall} alt='image product' preview={false} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageSmall} alt='image product' preview={false} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageSmall} alt='image product' preview={false} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageSmall} alt='image product' preview={false} />
            </WrapperStyleColImage>
          </Row>
        </Col>
        <Col span={14}>
          <WarperStyleNameProduct>Sách - thám tử lừng danh - conan - combo 10 tập 81 đến 91</WarperStyleNameProduct>
          <div>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <WrapperStyleTextSell> | Da ban 1000+ </WrapperStyleTextSell>
          </div>
          <WrapperPriceProduct>
            <WrapperPriceTextProduct>
              200.000đ
            </WrapperPriceTextProduct>
          </WrapperPriceProduct>
          <WrapperAddressProduct>
            <span>Giao đến </span>
            <span className='address'>Q . 1, P. Bến Nghé, Hồ Chí Minh</span>
          </WrapperAddressProduct>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailComponent;
