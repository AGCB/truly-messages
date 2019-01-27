import React from 'react'
import Contact from './Contact'

const ContactList = (props) => {
  const contacts = props.contacts.filteredContent;
  return (
    <ul className="contactList">
      {
        contacts.map((x,i) => {
          const { name, number, context } = x;
          return <Contact key={i}
                          name={name}
                          number={number}
                          context={context} />
        })
      }
    </ul>
  )
}

export default ContactList
