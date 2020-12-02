import React, { Component } from "react";
import axios from "axios"
import { Container } from "react-bootstrap";

import "../../styles/checkout.css";

const getUrl = "http://localhost:3000/history";
class Checkout extends Component {
  state = {
    history: {}
  }

  componentDidMount() {
    axios
      .get(getUrl)
      .then(({data}) => {
        this.setState({history: data})
      }).catch(err => console.log(err));
  }

  render() {
    return (
      <Container className='main'>
        <div className='container' style={{ marginTop: "120px" }}>
          <h1>
            <b>My Bag</b>
          </h1>
          <div className='row mt-4'>
            <div className='col-md-8  mb-3'>
              <div className='card w-100'>
                <div className='row no-gutters'>
                  <div
                    className='col-md-1 d-flex justify-center'
                    style={{ alignItems: "center" }}
                  >
                    <div className='form-check mx-auto checked-box'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        id='inlineCheckbox1'
                        defaultValue='option1'
                      />
                    </div>
                  </div>
                  <div
                    className='col-md-8 d-flex justify-center'
                    style={{ alignItems: "center" }}
                  >
                    <div className='card-body mt-2'>
                      <h5 className='card-title d-inline-block'>
                        Select all items
                      </h5>
                      <p className='card-text d-inline-block'>
                        (1 items selected)
                      </p>
                    </div>
                  </div>
                  <div
                    className='col-md-3 d-flex justify-end'
                    style={{ alignItems: "center" }}
                  >
                    <div className='card-body text-danger text-lg-right mr-4'>
                      <a href>Delete</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card w-100 mt-3'>
                <div className='row no-gutters'>
                  <div
                    className='col-md-1 d-flex justify-center'
                    style={{ alignItems: "center" }}
                  >
                    <div className='form-check mx-auto checked-box'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        id='inlineCheckbox1'
                        defaultValue='option1'
                        checked
                      />
                    </div>
                  </div>
                  <div className='col-md-2 d-flex justify-center'>
                    <img
                      src='https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png'
                      className='card-img w-75 h-75 m-auto'
                      alt='...'
                    />
                  </div>
                  <div
                    className='col-md-4 d-flex justify-center'
                    style={{ alignItems: "center" }}
                  >
                    <div className='card-body'>
                      <h6 className='card-title font-weight-bold'>
                        Men's formal suit - Black
                      </h6>
                      <p className='card-text'>Zalora Cloth</p>
                    </div>
                  </div>
                  <div
                    className='col-md-3 d-flex justify-center'
                    style={{ alignItems: "center" }}
                  >
                    <div className='card-body'>
                      <ul className='horizontal-list d-flex justify-center'>
                        <li>
                          <span className='color-selected rounded-circle bg-secondary'>
                            <i className='fas fa-minus'></i>
                          </span>
                        </li>
                        <li style={{ margin: "0.9rem 1rem" }}>
                          <span>1</span>
                        </li>
                        <li>
                          <span className='color-selected rounded-circle'>
                            <i className='fas fa-plus'></i>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className='col-md-2 d-flex justify-center'
                    style={{ alignItems: "center" }}
                  >
                    <div className='card-body'>
                      <h4 className='cost'>$ 20.0</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 detail-price'>
              <div className='card text-center w-100'>
                <div className='card-body'>
                  <h5 className='text-left font-weight-bold'>Total Summary</h5>
                  <div className='price'>
                    <p className='font-weight-bold d-inline'>Total Price</p>
                    <p className='text-dark d-inline'>
                      <b>$ 20.0</b>
                    </p>
                  </div>
                  <a href className='btn-buy d-xs-none'>
                    buy
                  </a>
                  <div className='btn d-flex d-lg-none'>
                    <a href className='btnBtm btn-buy mt-2'>
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Checkout;