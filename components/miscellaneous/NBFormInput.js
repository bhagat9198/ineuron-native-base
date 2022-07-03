import { FormControl, Icon, Input, WarningOutlineIcon } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NBFormInput(props) {
  const { value, placeholder, label, type, helperText, errorMsg, isRequired, rightIcon, leftIcon, isDisabled, keyboardType, handler } = props;

  function rightIconUI() {
    return <Icon
      as={<rightIcon.family name={rightIcon.name} />}
      size={5} mx="2" color="muted.400"
      onPress={rightIcon.handler ? rightIcon.handler : null}
    />
  }

  function leftIconUI() {
    return <Icon
      as={<leftIcon.family name={leftIcon.name} />}
      size={5} mx="2" color="muted.400"
      onPress={leftIcon.handler ? leftIcon.handler : null}
    />
  }

  return (
    <FormControl isDisabled={isDisabled ? isDisabled : false} isRequired={isRequired ? true : false} >
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        type={type ? type : 'text'} placeholder={placeholder}
        keyboardType={keyboardType ? keyboardType : 'text'}
        InputLeftElement={leftIcon ? leftIconUI() : null}
        InputRightElement={rightIcon ? rightIconUI() : null}
        value={value}
        onChange={e => handler? handler(e) : {}}

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
