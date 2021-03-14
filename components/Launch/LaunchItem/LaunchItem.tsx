import React, { useState } from "react";
import { InfoBtn } from "../../buttons";
import { Spacer } from "../../containers/Layout";
import LaunchModal from "../LaunchModal";
import {
  Container,
  TextGroup,
  LaunchDate,
  RocketImg,
  Title,
} from "./LaunchItem.style";

interface LaunchItemProps {}

const RocketImgSrc = require("../../../assets/icons/rocket.png");

const LaunchItem: React.FC<LaunchItemProps> = () => {
  const [isVisible, ModalToggle] = useState(false);
  return (
    <Container>
      <RocketImg source={RocketImgSrc} width={40} height={40} />
      <Spacer mright="30" />
      <TextGroup>
        <Title>Hello</Title>
        <Spacer mtop="7" />
        <LaunchDate>3rd March 2003</LaunchDate>
      </TextGroup>
      <InfoBtn
        onPress={() => ModalToggle(!isVisible)}
        style={{ marginLeft: "auto" }}
      />
      <LaunchModal {...{ isVisible, ModalToggle }} />
    </Container>
  );
};

export default LaunchItem;
