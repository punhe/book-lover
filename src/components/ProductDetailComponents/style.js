import { Col, Image } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
  height: 64px;
  width: 64px;
`;

export const WrapperStyleColImage = styled(Col)`
  flex-basis: unset;
  display: flex;
`;
export const WarperStyleNameProduct = styled.h1`
  color: rgb(36, 36, 36);
  font-size: 24px;
  font-weight: 300;
  line-height: 32px;
  word-break: break-work;
`

export const WrapperStyleTextSell = styled.span`
  font-size: 15px;
  line-height: 24px;
  color: rgb(120,120,120);
`
export const WrapperPriceProduct = styled.div`
  background: rgb(250,250,250);
  border-radius: 4px;
`

export const WrapperPriceTextProduct = styled.h1`
  font-size: 32px;
  line-height: 40px;
  margin-right:8px;
  font-weight: 500;
  padding: 10px;
  margin-top: 10px
`

export const WrapperAddressProduct = styled.div`
  span.address{
    text-decoration:underline;
    font-size: 15px;
    font-weight: 500;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`