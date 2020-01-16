import React from "react";
import { Contacts } from "../contacts/Contacts";
import { ContactForm } from "../contacts/ContactForm";

export const Home = () => {
  return (
    <div className='container'>
      <div className='grid-2'>
        <div>
          <ContactForm />
        </div>
        <div>
          <Contacts />
        </div>
      </div>
    </div>
  );
};
