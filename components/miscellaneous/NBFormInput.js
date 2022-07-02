import { FormControl, Icon, Input, WarningOutlineIcon } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NBFormInput(props) {
  const { placeholder, name, label, type, helperText, errorMsg, isRequired, iconHandler, rightIcon, leftIcon, keyboardType } = props;

  function rightIconUI() {
    return <Icon
      as={<rightIcon.family name={rightIcon.name} />}
      size={5} mr="2" color="muted.400"
      onPress={rightIcon.handler ? rightIcon.handler : null}
    />
  }

  function leftIconUI() {
    return <Icon
      as={<leftIcon.family name={leftIcon.name} />}
      size={5} mr="2" color="muted.400"
      onPress={leftIcon.handler ? leftIcon.handler : null}
    />
  }

  return (
    <FormControl isRequired={isRequired ? true : false} >
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        type={type ? type : 'text'} placeholder={placeholder}
        keyboardType={keyboardType ? keyboardType : 'text'}
        InputLeftElement={leftIcon ? leftIconUI() : null}
        InputRightElement={rightIcon ? rightIconUI() : null}
      />
      <FormControl.HelperText>
        {helperText ? helperText : ''}
      </FormControl.HelperText>
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {errorMsg ? errorMsg : ''}
      </FormControl.ErrorMessage>
    </FormControl >
  )
}
