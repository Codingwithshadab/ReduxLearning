import React, { useEffect, useState } from "react";
import HomeComp from "../../components/home/Home";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCart } from "../../assets/store";
import { useNavigate } from "react-router-dom";
const baseURL = "https://dummyjson.com/products";

const HomePage = ({ setCommon }) => {
  useEffect(() => {
    setCommon(true);
  }, []);
  const [data, setData] = useState(null);
  const [cartText, setCartText] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getData = async () => {
    try {
      let res = await axios.get(`${baseURL}`);
      setData(res?.data.products);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const addCartItem = (item, index) => {
    dispatch(addCart(item));
    setCartText(true);
    
  };
  return (
    <>
      <section className="cart sectionSpace">
        <div className="container">
          <div className="homeSec row">
            <div className="col-md-12">
              <div className="sectionTitle">
                <h6 className="text-danger">Shop Now</h6>
                <h1>Our Products</h1>
              </div>
            </div>
            {data &&
              data.map((item) => {
                return (
                  <HomeComp
                    key={item.id}
                    data={{ item, addCartItem, cartText }}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
