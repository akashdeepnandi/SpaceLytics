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

interface LaunchModalProps {
  isVisible: boolean;
  ModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const LaunchModal: React.FC<LaunchModalProps> = ({
  isVisible,
  ModalToggle,
}) => {
  const onBackButtonPress = useCallback(() => ModalToggle(false), [
    ModalToggle,
  ]);
  const onBackdropPress = useCallback(() => ModalToggle(false), [ModalToggle]);
  return (
    <Modal {...{ isVisible, onBackButtonPress, onBackdropPress }}>
      <Container>
        <Heading>Faclon Sat</Heading>
        <Spacer mtop="10" />
        <LaunchDateContainer>
          <LaunchDate>3rd March 2003</LaunchDate>
        </LaunchDateContainer>
        <Spacer mtop="35" />
        <DetailHeading>Rocket</DetailHeading>
        <Spacer mtop="10" />
        <DetailSubHeading>Name: Falcon 1</DetailSubHeading>
        <Spacer mtop="10" />
        <DetailSubHeading>Type: Merlin A</DetailSubHeading>
        <Spacer mtop="20" />
        <DetailHeading>Launch</DetailHeading>
        <Spacer mtop="10" />
        <DetailSubHeading>Site: Lorem ipsum dolor sit amet.</DetailSubHeading>
        <Spacer mtop="10" />
        <DetailSubHeading>Status: Success</DetailSubHeading>
        <Spacer mtop="20" />
        <DetailHeading>Details</DetailHeading>
        <Spacer mtop="10" />
        <DetailSubHeading>
          Site: Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </DetailSubHeading>
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
