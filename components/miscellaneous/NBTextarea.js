import { FormControl, TextArea, WarningOutlineIcon } from 'native-base'
import React from 'react'

export default function NBTextarea(props) {
  const { placeholder, label, helperText, errorMsg, isRequired, value, handler} = props;
  return (
    <FormControl isRequired={isRequired ? true : false} >
      <FormControl.Label>{label}</FormControl.Label>
      <TextArea
        value={value ? value : ''}
        placeholder={placeholder}
        onChange={e => handler(e)} 
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
