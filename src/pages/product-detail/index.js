import React, { useEffect, useState } from "react";
import ProductDetail from "../../components/product-detail/ProductDetail";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const baseURL = "https://dummyjson.com/products";

const ProductDetailPage = ({setCommon}) => {
  useEffect(()=>{
    setCommon(true)
  }, [])
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const getData = async () => {
    try {
      let res = await axios.get(`${baseURL}`);
      setData(res?.data?.products);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const filterData = data?.find((item) => {
    if (item.id === +params.id) {
      return item;
    }
  });

  const backPage = () =>{
    navigate(-1)
  }
  
  return (
    <>
      {filterData && <ProductDetail data={{backPage, filterData}} /> }
    </>
  );
};

export default ProductDetailPage;
