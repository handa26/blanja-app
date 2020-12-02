import React from "react";
import { Container } from "react-bootstrap";
import Header from "../navbar/header";
import Rating from "../rating/rating";

import "../../styles/product-details.css";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 0,
      quantity: 0,
    };
  }

  handleClickQty = () => {
    this.setState(prevState => ({ size: prevState.size + 1 }));
  };

  handleClickPlus = () => {
    this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
  };

  handleClickQtyMin = () => {
    this.setState(prevState => ({
      size: Math.max(prevState.size - 1, 0)
    }));
  };

  handleClickMin = () => {
    this.setState((prevState) => ({
      quantity: Math.max(prevState.quantity - 1, 0),
    }));
  };

  render() {
    const { name, desc, price, brand, image, category, rating } = this.props;
    return (
      <div>
        <Header />
        <Container className='main'>
          <p className='font-p-title'>
            Home {">"} category {">"} <b>{category}</b>
          </p>
          <div className='row'>
            <div className='col-sm-4'>
              <img src={image} alt='img' className='rounded img-fluid' />
              <div className='mt-3 more-images'>
                <ul className='horizontal-list'>
                  <li>
                    <a href>
                      <img
                        src={image}
                        alt={name}
                        className='rounded small-images'
                      />
                    </a>
                  </li>
                  <li>
                    <a href>
                      <img
                        src={image}
                        alt={name}
                        className='rounded small-images'
                      />
                    </a>
                  </li>
                  <li>
                    <a href>
                      <img
                        src={image}
                        alt={name}
                        className='rounded small-images'
                      />
                    </a>
                  </li>
                  <li>
                    <a href>
                      <img
                        src={image}
                        alt={name}
                        className='rounded small-images'
                      />
                    </a>
                  </li>
                  <li>
                    <a href>
                      <img
                        src={image}
                        alt={name}
                        className='rounded small-images'
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-sm-8'>
              <h3>{name}</h3>
              <p className='font-p-title ml-1'>
                <b>{brand}</b>
              </p>
              <div className='rating mt-n2 ml-1'>
                <Rating rating={rating} />
              </div>
              <p className='font-p-title ml-1 mt-3'>
                <b>Price</b>
              </p>
              <h2 className='mt-n3'>
                <b>Rp.{price}</b>
              </h2>
              <p className='font-p-title ml-1 mt-3 text-dark'>
                <b>Color</b>
              </p>
              <ul className='horizontal-list'>
                <li>
                  <span className='color-selected rounded-circle border border-danger'>
                    <a
                      href
                      className='color-option rounded-circle'
                      style={{ backgroundColor: "black" }}
                    />
                  </span>
                </li>
                <li>
                  <a href className='color-option rounded-circle bg-danger'></a>
                </li>
                <li>
                  <a
                    href
                    className='color-option rounded-circle bg-primary'
                  ></a>
                </li>
                <li>
                  <a
                    href
                    className='color-option rounded-circle bg-success'
                  ></a>
                </li>
              </ul>
              <div className='row justify-content-start'>
                <div className='col-sm-4'>
                  <p className='font-p-title ml-1 mt-3 text-dark'>
                    <b>Size</b>
                  </p>
                  <ul className='horizontal-list d-flex justify-center'>
                    <li>
                      <span
                        onClick={this.handleClickQtyMin}
                        className='color-selected rounded-circle bg-secondary'
                      >
                        <i className='fas fa-minus'></i>
                      </span>
                    </li>
                    <li style={{ margin: "0.9rem 1rem" }}>
                      <span>{this.state.size}</span>
                    </li>
                    <li>
                      <span
                        onClick={this.handleClickQty}
                        className='color-selected rounded-circle'
                      >
                        <i className='fas fa-plus'></i>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='col-sm-4'>
                  <p className='font-p-title ml-1 mt-3 text-dark'>
                    <b>Jumlah</b>
                  </p>
                  <ul className='horizontal-list d-flex justify-center'>
                    <li>
                      <span
                        onClick={this.handleClickMin}
                        className='color-selected rounded-circle bg-secondary'
                      >
                        <i className='fas fa-minus'></i>
                      </span>
                    </li>
                    <li style={{ margin: "0.9rem 1rem" }}>
                      <span>{this.state.quantity}</span>
                    </li>
                    <li>
                      <span
                        onClick={this.handleClickPlus}
                        className='color-selected rounded-circle'
                      >
                        <i className='fas fa-plus'></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className=' d-flex justify-content-between'>
                <a href className='btnGrup btn-chart mt-2 mr-2'>
                  Chart
                </a>
                <a href className='btnGrup btn-add-bag mt-2 mr-2'>
                  Add bag
                </a>
                <a href className='btnGrup btn-buy mt-2'>
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          <h3 className='mt-3'>Informasi Produk</h3>
          <div>
            <p className='mt-3 text-dark'>
              <b>Condition</b>
            </p>
            <p className='mt-n3 text-danger'>
              <b>New</b>
            </p>
            <p className='mt-4 text-dark'>
              <b>Description</b>
            </p>
            <p>{desc}</p>
          </div>
          <h2>Product Review</h2>

          <Container style={{ marginBottom: "70px" }}>
            <div className='row'>
              <div className='col-md-3 align-item-center justify-content-center'>
                <h1 className='display-1 d-inline'>
                  <b>5.0</b>
                </h1>
                <p className='d-inline-block ml-1 mt-3 text-dark'>
                  <b>/ 10</b>
                </p>
                <div className='rating mt-n2 ml-1 d-flex'>
                  <i className='fas fa-star bintang'></i>
                  <i className='fas fa-star bintang'></i>
                  <i className='fas fa-star bintang'></i>
                  <i className='fas fa-star bintang'></i>
                  <i className='fas fa-star bintang'></i>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='row'>
                  <div className='side'>
                    <div>
                      {" "}
                      <i className='fas fa-star bintang'></i>5
                    </div>
                  </div>
                  <div className='middle'>
                    <div className='bar-container'>
                      <div className='bar-5'></div>
                    </div>
                  </div>
                  <div className='side right'>
                    <div>4</div>
                  </div>
                  <div className='side'>
                    <div>
                      <i className='fas fa-star bintang'></i>4
                    </div>
                  </div>
                  <div className='middle'>
                    <div className='bar-container'>
                      <div className='bar-4'></div>
                    </div>
                  </div>
                  <div className='side right'>
                    <div>0</div>
                  </div>
                  <div className='side'>
                    <div>
                      <i className='fas fa-star bintang'></i>3
                    </div>
                  </div>
                  <div className='middle'>
                    <div className='bar-container'>
                      <div className='bar-3'></div>
                    </div>
                  </div>
                  <div className='side right'>
                    <div>0</div>
                  </div>
                  <div className='side'>
                    <div>
                      <i className='fas fa-star bintang'></i>2
                    </div>
                  </div>
                  <div className='middle'>
                    <div className='bar-container'>
                      <div className='bar-2'></div>
                    </div>
                  </div>
                  <div className='side right'>
                    <div>0</div>
                  </div>
                  <div className='side'>
                    <div>
                      <i className='fas fa-star bintang'></i>1
                    </div>
                  </div>
                  <div className='middle'>
                    <div className='bar-container'>
                      <div className='bar-1'></div>
                    </div>
                  </div>
                  <div className='side right'>
                    <div>0</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>

          {/* Menu Bottom */}
          <div className='btn d-flex d-lg-none'>
            <a href className='btnBtm btn-chart mt-2'>
              Chart
            </a>
            <a href className='btnBtm btn-add-bag mt-2'>
              Add bag
            </a>
            <a href className='btnBtm btn-buy mt-2'>
              Buy Now
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

export default ProductDetails;
