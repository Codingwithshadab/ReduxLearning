import React, { useEffect } from "react";
import ContactList from "../../components/contact-list/ContactList";

const ContactListPage = ({ setCommon }) => {
  useEffect(() => {
    setCommon(true);
  }, []);
  return (
    <>
      <ContactList />
    </>
  );
};

export default ContactListPage;
