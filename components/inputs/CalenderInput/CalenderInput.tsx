import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  CalenderText,
  CalenderWrapper,
  FieldLabel,
} from "./CalenderInput.style";
import { MaterialIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import { Row, Spacer } from "../../containers/Layout";
interface CalenderInputProps {
  label: string;
  date: Date | null;
  handleDateSelect: (value: Date) => void;
}

const CalenderInput: React.FC<CalenderInputProps> = ({
  label,
  date,
  handleDateSelect,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (value: Date) => {
    handleDateSelect(value);
    hideDatePicker();
  };
  return (
    <Row>
      <FieldLabel>{label}:</FieldLabel>
      <Spacer mright="5" />
      <CalenderWrapper onPress={showDatePicker}>
        <MaterialIcons
          name="date-range"
          size={16}
          color="black"
          style={{ padding: 0, margin: 0, marginRight: 5 }}
        />
        <CalenderText>
          {date ? format(date, "yyyy/MM/dd") : "yyyy/mm/dd"}
        </CalenderText>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          isDarkModeEnabled={true}
        />
      </CalenderWrapper>
    </Row>
  );
};

export default CalenderInput;
