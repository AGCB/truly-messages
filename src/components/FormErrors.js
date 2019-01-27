import React from 'react'

const FormErrors = ({nameErrors, numberErrors, contextErrors}) => {
  if(nameErrors) {
    return <span>please use only letters for your name</span>
  }
  if(numberErrors) {
    return <span>valid 10 digit phone numbers only please</span>
  }
  if(contextErrors) {
    return <span>please use only letters for your context</span>
  }
  return null;
}
export default FormErrors;
