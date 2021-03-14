import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from "../../App";
import { AuthBtn } from "../../components/buttons";
import { Background, Spacer } from "../../components/containers/Layout";
import { FormError } from "../../components/Form";
import { ContentWrapper } from "../../containers/ContentWrapper";
import {
  removeError,
  SelectAuth,
  signIn,
  userSignIn,
} from "../../redux/reducers/AuthReducer";
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
  const { isError } = useSelector(SelectAuth);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
    errorEmail: false,
    errorPassword: false,
  });
  const [disabled, setDisabled] = useState(false);

  const userSignUp = async () => {
    try {
      setErrors({
        errorEmail: false,
        errorPassword: false,
      });
      if (isError) {
        dispatch(removeError());
      }
      const user = await Auth.createUserWithEmailAndPassword(email, password);
      dispatch(signIn(JSON.stringify(user)));
    } catch (err) {
      setErrors({
        errorEmail: true,
        errorPassword: true,
      });
    }
    setDisabled(false);
  };

  useEffect(() => {
    if (isError) {
      setDisabled(false);
    }
  }, [isError]);

  return (
    <Background source={ImgSrc}>
      <ContentWrapper
        style={{ flex: 1, justifyContent: "center", paddingHorizontal: 30 }}
      >
        <FormContainer>
          <FormHeader>SpaceLytics</FormHeader>
          <FieldSet>
            <FormLabel>Email</FormLabel>
            <Spacer mtop="7" />
            <FormInput
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            {errors.errorEmail && (
              <>
                <Spacer mtop="10" />
                <FormError msg="A valid email is required" />
              </>
            )}
            <Spacer mtop="10" />
            <FormLabel>Password</FormLabel>
            <Spacer mtop="7" />
            <FormInput
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            {errors.errorPassword && (
              <>
                <Spacer mtop="10" />
                <FormError msg="Min 8 character password required" />
              </>
            )}
            {isError && (
              <>
                <Spacer mtop="20" />
                <FormError msg="Invalid credentials, try again" />
              </>
            )}
            <Spacer mtop="20" />
            <BtnGroup>
              <AuthBtn
                title="Signin"
                onPress={() => {
                  Keyboard.dismiss();
                  setDisabled(true);
                  setErrors({
                    errorEmail: false,
                    errorPassword: false,
                  });
                  if (isError) {
                    dispatch(removeError());
                  }
                  if (!email || !password || password.length < 8) {
                    setErrors({
                      errorEmail: !email,
                      errorPassword: !password || password.length < 8,
                    });
                    setDisabled(false);
                    return;
                  }
                  dispatch(userSignIn(email, password));
                  setDisabled(false);
                }}
                {...{ disabled }}
              />

              <AuthBtn
                title="Signup"
                secondary
                onPress={() => {
                  Keyboard.dismiss();
                  setDisabled(true);
                  setErrors({
                    errorEmail: false,
                    errorPassword: false,
                  });
                  if (!email || !password || password.length < 8) {
                    setErrors({
                      errorEmail: !email,
                      errorPassword: !password || password.length < 8,
                    });
                    setDisabled(false);
                    return;
                  }
                  userSignUp();
                }}
                {...{ disabled }}
              />
            </BtnGroup>
          </FieldSet>
        </FormContainer>
      </ContentWrapper>
    </Background>
  );
};

export default Login;
