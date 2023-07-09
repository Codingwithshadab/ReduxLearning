import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./movie/Movie";
const baseURL = "https://www.omdbapi.com/?apikey=c24c2c7d&s=batman";

const Movies = () => {
  const [data, setData] = useState(null);
  const [inputText, setInputText] = useState("");
  const getData = async () => {
    try {
      let res = await axios.get(`${baseURL}`);
      setData(res?.data.Search);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    if ((e.key === "Enter")) {
      setInputText(e.target.value);
    }
  };
  const filterData = data?.filter((item) => {
    return item.Title.includes(inputText);
  });

  return (
    <>
      <section className="moviesSec sectionSpace">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectionTitle">
                <h6 className="text-danger">Our Movies</h6>
                <h1>Latest Movies</h1>
              </div>
            </div>
            <div className="col-md-12">
              <div className="moviesSearch">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Movies"
                  autoComplete="off"
                  onKeyDown={handleChange}
                />
                <button className="btn btn-primary" type="button"> Enter </button>
              </div>
            </div>
            </div>
            <div className="row justify-content-center">
            {filterData &&
              filterData.map((item, id) => {
                return <Movie key={id} item={item} />;
              })}
         </div>
        </div>
      </section>
    </>
  );
};

export default Movies;
