import React from "react";
import Interview from "../interview/Interview";

const Weather = () => {
  return (
    <>
      <section className="todoSec sectionSpace">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectionTitle">
                <h6 className="text-danger">React Interviews</h6>
                <h3>React Interviews</h3>
                <hr />
              </div>
            </div>
          </div>
          <Interview />
        </div>
      </section>
    </>
  );
};

export default Weather;
