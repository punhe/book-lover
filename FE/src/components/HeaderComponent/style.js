import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    background-color: rgb(26, 148, 255);
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 100%;
    padding: 10px 0;        
`

export const WrapperTextHeader = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: left;
    margin-left: 100px;
`
export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-item: center;
    color: #fff;
    gap: 10px;
    font-size: 12px;
`
export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
`
