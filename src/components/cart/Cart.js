import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCartItem } from "../../assets/store";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storeData = useSelector((state) => {
    return state.value;
  });
  const backPage = () => {
    navigate("/");
  };
  const removeCart = (id) => {
    dispatch(removeCartItem(id));
  };
  return (
    <>
      <section className="cartSec sectionSpace">
        <div className="container">
          <div className="cartInner">
            <div className="sectionTitle">
              <h1>Cart</h1>
            </div>
            <div className="cartInfo">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {storeData &&
                    storeData.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{item.price}</td>
                          <td>
                            <img
                              src={`${item.images[0]}`}
                              alt={item.title}
                              className="img-fluid w-25"
                            />
                          </td>
                          <td>{item.description}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => {
                                removeCart(item.id);
                              }}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>

            <button type="button" className="btn btn-success" onClick={backPage}>
              Back
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
