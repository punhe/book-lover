import { Col, Row } from "antd";
import styled from "styled-components";

export const WrapperProducts = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;
`
export const WrapperNavbar = styled(Col)`
    background: #fff;
    margin-right: 10px;
    padding: 10px;
    height: fit-content;
    border-radius: 4px;
    margin-top: 20px;
    width: 200px
`
export const WrapperRow = styled(Row)`
        flexWrap: nowrap;
        paddingTop: 10px;
`