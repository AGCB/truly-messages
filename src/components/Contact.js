import React from 'react'
import createPhoneNumber from '../helpers/'

const Contact = (props) => {
  const { name, number, context } = props;
  const formattedNumbers = createPhoneNumber(number.split(""));

  return (
    <ul className="contact">
    <li>{name}</li>
    <li>{formattedNumbers}</li>
    <li>{context}</li>
    </ul>
  )
}

export default Contact
