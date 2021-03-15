import { format } from "date-fns";
import React, { useState } from "react";
import { Launch } from "../../../redux/@types/Launch";
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

interface LaunchItemProps {
  item: Launch;
}

const RocketImgSrc = require("../../../assets/icons/rocket.png");

const LaunchItem: React.FC<LaunchItemProps> = ({ item }) => {
  const [isVisible, ModalToggle] = useState(false);
  return (
    <Container>
      <RocketImg source={RocketImgSrc} width={40} height={40} />
      <Spacer mright="30" />
      <TextGroup>
        <Title>
          {item.mission_name.length > 20
            ? item.mission_name.substring(0, 20) + "..."
            : item.mission_name}
        </Title>
        <Spacer mtop="7" />
        <LaunchDate>
          {format(new Date(item.launch_date_utc), "do MMM yyyy")}
        </LaunchDate>
      </TextGroup>
      <InfoBtn
        onPress={() => ModalToggle(!isVisible)}
        style={{ marginLeft: "auto" }}
      />
      <LaunchModal {...{ isVisible, ModalToggle, item }} />
    </Container>
  );
};

export default LaunchItem;
