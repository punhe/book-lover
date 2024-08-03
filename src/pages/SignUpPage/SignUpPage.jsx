import React from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imageLogo from "../../assets/images/register-logo.png"

export const SignInPage = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ccc'}}>
    <div style={{ width: "800px", height: "445px", borderRasius: "6px", background: '#fff', display: 'flex'}}>
      <WrapperContainerLeft>
        <h1>Hello</h1>
        <p>Please login your account</p>
        <InputForm style={{marginBottom: '10px'}} placeholder="abc@gmail.com" />
        <InputForm placeholder="password" style={{marginBottom: '10px'}}/>
        <InputForm placeholder="confirm password" />
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
