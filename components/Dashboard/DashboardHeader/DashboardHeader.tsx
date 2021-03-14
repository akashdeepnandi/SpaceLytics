import React from "react";
import { useDispatch } from "react-redux";
import { userSignOut } from "../../../redux/reducers/AuthReducer";
import { SignoutBtn } from "../../buttons";
import { Row, Spacer } from "../../containers/Layout";
import { CalenderInput } from "../../inputs";
import {
  ActionBarContainer,
  FieldSet,
  FilterContainer,
  FilterText,
  Header,
  HeaderTitle,
  Heading,
  SigoutBtnContainer,
} from "./DashboardHeader.style";

interface DashboardHeaderProps {}

const DashboardHeader: React.FC<DashboardHeaderProps> = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Header>
        <HeaderTitle>Dashboard</HeaderTitle>
        <SigoutBtnContainer>
          <SignoutBtn onPress={() => dispatch(userSignOut())} />
        </SigoutBtnContainer>
      </Header>
      <ActionBarContainer>
        <Heading>Launches</Heading>
        <Row>
          <FilterContainer first>
            <FilterText>All</FilterText>
          </FilterContainer>
          <FilterContainer active>
            <FilterText>Upcoming</FilterText>
          </FilterContainer>
          <FilterContainer last>
            <FilterText>Past</FilterText>
          </FilterContainer>
        </Row>
      </ActionBarContainer>
      <FieldSet>
        <CalenderInput label="Start" />
        <CalenderInput label="End" />
      </FieldSet>
      <Spacer mbottom="20" />
    </>
  );
};

export default DashboardHeader;
