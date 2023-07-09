import React from "react";

const user = JSON.parse(localStorage.getItem("user"));
const { name, password, agreement} = user;
const Profile = () => {
  return (
    <>
      <section className="profileSec sectionSpace">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectionTitle">
                <h6 className="text-danger">Our Profile</h6>
                <h1>Profile</h1>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="profileInfo">
                    <ul>
                      <li>
                        <strong>Name: </strong> {name}
                      </li>
                      <li>
                        <strong>Password: </strong> {password}
                      </li>
                      <li>
                        <strong>Agreement: </strong> {agreement}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
