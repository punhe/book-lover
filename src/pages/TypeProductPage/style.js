import { Col, Row } from "antd";
import styled from "styled-components";

export const WrapperProducts = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
`
export const WrapperNavbar = styled(Col)`
    background: fff;
    margin-right: 10px;
    padding: 10px;
    border-radius: 6px;
    margin-top: 20px;
`
export const WrapperRow = styled(Row)`
        flexWrap: nowrap;
        paddingTop: 10px;
`