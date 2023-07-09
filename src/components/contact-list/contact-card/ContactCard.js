import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { MdCancel } from "react-icons/md";

const ContactCard = ({ data }) => {
  const { contactCard, removeCardAddress } = data;
  return (
    <>
      {contactCard.map((item, index) => {
        return (
          <div className="cardItem" key={index}>
            <ul>
              <li>
                <strong>Full Name: </strong>
                {item.fullName}
              </li>
              <li>
                <strong>Profile: </strong>
                {item.profile}
              </li>
              <li>
                <strong>Email: </strong>
                {item.mail}
              </li>
              <li>
                <strong>Action: </strong>
                <span className="text-primary pe-1 actionBtn">
                  <FiEdit2 />
                </span>
                <span
                  className="text-danger actionBtn"
                  onClick={() => {
                    removeCardAddress(index);
                  }}
                >
                  <MdCancel />
                </span>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default ContactCard;
