import { Col, Image, Row } from 'antd';
import React from 'react';
import images from '../../assets/images/test.webp';
import imageSmall from '../../assets/images/imgSmall.webp';
import { WrapperStyleColImage, WrapperStyleImageSmall } from './style';

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
        <Col span={14}></Col>
      </Row>
    </div>
  );
};

export default ProductDetailComponent;
