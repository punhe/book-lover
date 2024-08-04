import React, { useState } from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imageLogo from "../../assets/images/register-logo.png"
import {
  EyeOutlined, EyeInvisibleOutlined
} from '@ant-design/icons';

export const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ccc'}}>
    <div style={{ width: "800px", height: "445px", borderRasius: "6px", background: '#fff', display: 'flex'}}>
      <WrapperContainerLeft>
        <h1>Hello</h1>
        <p>Please login your account</p>
        <InputForm style={{marginBottom: '10px'}} placeholder="abc@gmail.com" />
        <div style={{ position: "relative" }}>
            <span
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
            >
              {isShowPassword ? (
                <EyeOutlined />
              ) : (<EyeInvisibleOutlined />)}
            </span>
            <InputForm placeholder="password" type={isShowPassword ? 'text' : 'password'} style={{marginBottom: '10px'}}/>
          </div>
          <div style={{ position: "relative" }}>
            <span
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
            >
              {isShowPassword ? (
                <EyeOutlined />
              ) : (<EyeInvisibleOutlined />)}
            </span>
            <InputForm placeholder="confirm password" type={isShowPassword ? 'text' : 'password'} />
          </div>
        <ButtonComponent
          bordered={false}
          size={40}
          styleButton={{
            background: "rgb(255, 57, 69)",
            height: "48px",
            width: "100%",
            border: "none",
            borderRadius: "4px",
            margin: "26px 0 10px"
          }}
          textButton={"Login"}
          styleTextButton={{
            color: "#fff",
            fontSize: "15px",
            fontWeight: "700",
          }}
        ></ButtonComponent>
         <p>Already have an account?<WrapperTextLight>  Sign in</WrapperTextLight></p>
      </WrapperContainerLeft>
      <WrapperContainerRight>
        <Image src={imageLogo} preview={false} alt="image-logo" height="203px" width="203px" />
        <h4>Shopping with HungMeZues</h4>
      </WrapperContainerRight>
    </div>
  </div>
  );
};
export default SignInPage;
