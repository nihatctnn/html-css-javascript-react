import { useState, useEffect } from "react";

import './styles.css'
import List from "./List";
import Form from "./Form";


function Contacts() {
  const [contacts, setContacts] = useState([

    {
      fullname: "Nihat",
      phone_number: "1231238",
    },

    {
      fullname: "Ömer",
      phone_number: "1264853",
    },

    {
      fullname: "Murat",
      phone_number: "1489637",
    },

    {
      fullname: "Ahmet",
      phone_number: "1448937",
    },

  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">

      <h1>Contacts</h1>
      <List contacts={contacts}></List>
      <Form addContact={setContacts} contacts={contacts}></Form>
    </div>
  );
}

export default Contacts;
