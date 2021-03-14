import React, { useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthBtn from "../../components/buttons/AuthBtn";
import { Background, Spacer } from "../../components/containers/Layout";
import {
  BtnGroup,
  FieldSet,
  FormContainer,
  FormHeader,
  FormInput,
  FormLabel,
} from "./Login.style";
interface LoginProps {}

const ImgSrc = require("../../assets/images/login.jpg");

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Background source={ImgSrc}>
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", paddingHorizontal: 30 }}
      >
        <FormContainer>
          <FormHeader>SpaceLytics</FormHeader>
          <FieldSet>
            <FormLabel>Email</FormLabel>
            <FormInput
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <Spacer mtop="10" />
            <FormLabel>Password</FormLabel>
            <FormInput
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <Spacer mtop="20" />
            <BtnGroup>
              <AuthBtn
                title="Signin"
                onPress={() => console.log("clicked signin")}
              />
              <AuthBtn
                title="Signup"
                secondary
                onPress={() => console.log("clicked signup")}
              />
            </BtnGroup>
          </FieldSet>
        </FormContainer>
      </SafeAreaView>
    </Background>
  );
};

export default Login;
