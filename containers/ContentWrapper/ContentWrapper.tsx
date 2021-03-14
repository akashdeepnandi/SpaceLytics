import React from "react";
import {
  Keyboard,
  StyleProp,
  TouchableWithoutFeedback,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ContentWrapperProps {
  style?: StyleProp<ViewStyle>;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children, style }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        {...{
          style,
        }}
      >
        {children}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ContentWrapper;
