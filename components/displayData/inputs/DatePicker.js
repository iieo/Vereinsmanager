import React, { useState } from "react";
import { Platform } from "react-native";
import { FormControl, Icon, Input, Hidden, Button } from "native-base";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DataInput from "./DataInputs";

export default function DatePicker(props) {
  if (Platform.OS === "web") {
    return <DataInput {...props} />;
  }
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <FormControl>
      <FormControl.Label>{props.inputData.text}</FormControl.Label>

      <Button title="Show Date Picker" onPress={showDatePicker} />
    </FormControl>
  );
}
