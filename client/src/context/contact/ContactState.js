import React, { useReducer } from "react";
import uuid from "uuid";

import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
} from "../types";

const ContactState = (props) => {
  const initalState = {
    contacts: [
      {
        id: 1,
        name: "Jill Johnson",
        email: "jill@email.com",
        phone: "111111",
        type: "personal",
      },
      {
        id: 2,
        name: "Jill Johnson",
        email: "jill@email.com",
        phone: "111111",
        type: "professional",
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initalState);


  // ADD CONTACT

  // DELETE CONTACT

  // SET CURRENT CONTACT

  // CLEAR CURRENT CONTACT

  // UPDATE CONTACT

  // FILTER CONTACTS

  // CLEAR FILTER

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
