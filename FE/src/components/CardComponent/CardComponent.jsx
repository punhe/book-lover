import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
  WrapperStyleTextSell,
} from "./style";
import { StarFilled } from "@ant-design/icons";

const CardComponent = () => {
  return (
      <WrapperCardStyle
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <StyleNameProduct>Iphone</StyleNameProduct>
        <WrapperReportText>
          <span style={{ marginRight: "6px" }}>
            <span>4.96 </span>
            <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          </span>
          <WrapperStyleTextSell> | Da ban 1000+ </WrapperStyleTextSell>
        </WrapperReportText>
        <WrapperPriceText>
          <span style={{ marginRight: '8px' }}>1.000.000đ</span>
          <WrapperDiscountText>-5%</WrapperDiscountText>
        </WrapperPriceText>
      </WrapperCardStyle>
  );
};

export default CardComponent;
