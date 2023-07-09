import React, { useState } from "react";
import ContactForm from "./contact-form/ContactForm";
import ContactCard from "./contact-card/ContactCard";

const ContactList = () => {
  const [contactForm, setContactForm] = useState({
    fullName: "",
    profile: "",
    mail: "",
  });
  const [contactCard, setContactCard] = useState([]);
  const handleChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    const cloneData = { ...contactForm };
    cloneData[name] = val;
    setContactForm(cloneData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setContactCard([...contactCard, contactForm]);
  };
  const removeCardAddress = (index) => {
    const cloneArr = [...contactCard];
    cloneArr.splice(index, 1);
    setContactCard(cloneArr);
  };

  return (
    <>
      <section className="todoSec sectionSpace">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectionTitle">
                <h6 className="text-danger">Our Contact list</h6>
                <h3>Contact List</h3>
                <hr />
              </div>
            </div>
            <div className="col-md-6">
              <div className="contactFormSec">
                <div className="bg-white p-3 border-1">
                  <h6 className="text-danger text-uppercase">Contact Form</h6>
                  <hr />
                  <ContactForm
                    data={{ contactForm, handleSubmit, handleChange }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-white p-3 border-1">
                <h6 className="text-danger text-uppercase">Contact Card</h6>
                <hr />
                <div className="contactCardInfo">
                  {contactCard.length > 0 ? (
                    <ContactCard data={{ contactCard, removeCardAddress }} />
                  ) : (
                    <em>No Data Available...</em>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactList;
