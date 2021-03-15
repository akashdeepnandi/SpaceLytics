import React, { useCallback } from "react";
import Modal from "react-native-modal";
import { Spacer } from "../../containers/Layout";
import { LaunchDate } from "../LaunchItem/LaunchItem.style";
import {
  CloseModal,
  Container,
  DetailHeading,
  DetailSubHeading,
  Heading,
  LaunchDateContainer,
} from "./LaunchModal.style";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../../theme";
import { Launch } from "../../../redux/@types/Launch";
import { format } from "date-fns";

interface LaunchModalProps {
  isVisible: boolean;
  ModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
  item: Launch;
}

const LaunchModal: React.FC<LaunchModalProps> = ({
  isVisible,
  ModalToggle,
  item,
}) => {
  const onBackButtonPress = useCallback(() => ModalToggle(false), [
    ModalToggle,
  ]);
  const onBackdropPress = useCallback(() => ModalToggle(false), [ModalToggle]);
  return (
    <Modal {...{ isVisible, onBackButtonPress, onBackdropPress }}>
      <Container>
        <Heading>{item.mission_name}</Heading>
        <Spacer mtop="10" />
        <LaunchDateContainer>
          <LaunchDate>
            {format(new Date(item.launch_date_utc), "do MMM yyyy")}
          </LaunchDate>
        </LaunchDateContainer>
        <Spacer mtop="35" />
        <DetailHeading>Rocket</DetailHeading>
        <Spacer mtop="10" />
        <DetailSubHeading>Name: {item.rocket.rocket_name}</DetailSubHeading>
        <Spacer mtop="10" />
        <DetailSubHeading>Type: {item.rocket.rocket_type}</DetailSubHeading>
        <Spacer mtop="20" />
        <DetailHeading>Launch</DetailHeading>
        <Spacer mtop="10" />
        <DetailSubHeading>Site: {item.launch_site.site_name}</DetailSubHeading>
        <Spacer mtop="10" />
        <DetailSubHeading>
          Status: {item.launch_success ? "Success" : "Failure"}
        </DetailSubHeading>
        <Spacer mtop="20" />
        <DetailHeading>Details</DetailHeading>
        <Spacer mtop="10" />
        <DetailSubHeading>{item.details}</DetailSubHeading>
        <Spacer mtop="10" />
        <CloseModal onPress={() => ModalToggle(false)}>
          <AntDesign
            name="closecircle"
            size={35}
            color={theme.colors.font.red}
          />
        </CloseModal>
      </Container>
    </Modal>
  );
};

export default LaunchModal;
