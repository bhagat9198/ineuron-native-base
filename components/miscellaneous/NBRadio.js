import React from 'react'
import { FormControl, Icon, Input, Radio, Stack, WarningOutlineIcon } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";

export default function NBRadio(props) {
  const { label, isRequired, isDisabled, radiolist, helperText, errorMsg, value, handler } = props;
  return (
    <FormControl isRequired={isRequired ? true : false} >
      <FormControl.Label>{label}</FormControl.Label>
      <Radio.Group
        isDisabled={isDisabled ? isDisabled : false}
        value={value}
        onChange={e => handler(e)}
        name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size">
        <Stack direction={{
          base: "column",
          md: "row"
        }} alignItems={{
          base: "flex-start",
          md: "center"
        }} space={4} >
          {radiolist.map(radio =>
            <Radio key={radio.value} value={radio.value} colorScheme="red" size="sm" my={1}>
              {radio.label}
            </Radio>)}
        </Stack>
      </Radio.Group>
      <FormControl.HelperText>
        {helperText ? helperText : ''}
      </FormControl.HelperText>
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {errorMsg ? errorMsg : ''}
      </FormControl.ErrorMessage>
    </FormControl >
  )
}
