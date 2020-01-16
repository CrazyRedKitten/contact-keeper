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
  CLEAR_FILTER
} from "../contact/types";
import contactContext from "./contactContext";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Pekka Vittunen",
        phone: "7777777",
        email: "Pekka@vittu.fi",
        type: "personal"
      },
      { id: 2, name: "Matti Koivisto", phone: "666-666-666", type: "personal" },
      { id: 3, name: "Mr Pivandopalo", phone: "88005353535", type: "personal" }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact

  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update a contact

  //Filter contacts

  //Clear Filter

  return (
    <contactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
