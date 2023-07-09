import React from "react";

const ContactForm = ({ data }) => {
  const { handleChange, handleSubmit, contactForm } = data;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="form-control"
            autoComplete="off"
            name="fullName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="name">Profile</label>
          <input
            type="text"
            placeholder="Web Developer"
            className="form-control"
            autoComplete="off"
            name="profile"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="name">Email</label>
          <input
            type="mail"
            placeholder="example@gmail.com"
            className="form-control"
            autoComplete="off"
            name="mail"
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-3">
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
