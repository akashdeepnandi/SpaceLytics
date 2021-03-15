import React from "react";
import { useDispatch } from "react-redux";
import { userSignOut } from "../../../redux/reducers/AuthReducer";
import {
  fetchLaunches,
  LaunchFilter,
  loading,
} from "../../../redux/reducers/LaunchReducer";
import { DateRange } from "../../../screens/Dashboard/Dashboard";
import { AuthBtn, SignoutBtn } from "../../buttons";
import { Row, Spacer } from "../../containers/Layout";
import { FormError } from "../../Form";
import { CalenderInput } from "../../inputs";
import {
  ActionBarContainer,
  ButtonGroup,
  FieldSet,
  FilterContainer,
  FilterText,
  Header,
  HeaderTitle,
  Heading,
  SigoutBtnContainer,
} from "./DashboardHeader.style";

interface DashboardHeaderProps {
  filter: LaunchFilter;
  setFilter: React.Dispatch<React.SetStateAction<LaunchFilter>>;
  dateRange: DateRange;
  setDateRange: React.Dispatch<React.SetStateAction<DateRange>>;
  handleDateFilter: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  filter,
  setFilter,
  dateRange,
  setDateRange,
  handleDateFilter,
}) => {
  const dispatch = useDispatch();
  const errorDate =
    dateRange.start && dateRange.end && dateRange.start > dateRange.end;
  const handleFilterSelection = (value: LaunchFilter) => {
    setFilter(value);
    dispatch(loading());
  };
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
          <FilterContainer
            first
            active={filter === "ALL"}
            onPress={() => handleFilterSelection("ALL")}
          >
            <FilterText>All</FilterText>
          </FilterContainer>
          <FilterContainer
            active={filter === "UPCOMING"}
            onPress={() => handleFilterSelection("UPCOMING")}
          >
            <FilterText>Upcoming</FilterText>
          </FilterContainer>
          <FilterContainer
            last
            active={filter === "PAST"}
            onPress={() => handleFilterSelection("PAST")}
          >
            <FilterText>Past</FilterText>
          </FilterContainer>
        </Row>
      </ActionBarContainer>
      <FieldSet>
        <CalenderInput
          label="Start"
          date={dateRange.start}
          handleDateSelect={(value: Date) =>
            setDateRange({ ...dateRange, start: value })
          }
        />

        <CalenderInput
          label="End"
          date={dateRange.end}
          handleDateSelect={(value: Date) =>
            setDateRange({ ...dateRange, end: value })
          }
        />
      </FieldSet>
      {errorDate && (
        <FormError
          msg="Start should be less than End"
          style={{ justifyContent: "center", marginTop: 10 }}
        />
      )}
      {dateRange.start && dateRange.end && (
        <ButtonGroup>
          <AuthBtn
            title="Search"
            onPress={handleDateFilter}
            disabled={errorDate ? true : false}
          />
          <AuthBtn
            title="Clear"
            secondary
            onPress={() => {
              setDateRange({ start: null, end: null });
              dispatch(fetchLaunches(filter));
            }}
          />
        </ButtonGroup>
      )}
      <Spacer mbottom="20" />
    </>
  );
};

export default DashboardHeader;
