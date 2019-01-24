import React from 'react'

const Contact = (props) => {
  const { name, number, context } = props;
  return (
    <ul className="contact">
    <li>{name}</li>
    <li>{number}</li>
    <li>{context}</li>
    </ul>
  )
}

export default Contact
