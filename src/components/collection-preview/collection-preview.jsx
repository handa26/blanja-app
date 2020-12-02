import React from "react";
import axios from "axios";
import CollectionItem from "../collection-item/collection-item";

import "../../styles/collection-preview.css";

const getUrl = "http://localhost:3000/products";

class CollectionPreview extends React.Component {
  constructor() {
    super();
    this.state = {
      products: {},
      popularProducts: {},
    };
  }

  getAllProducts = () => {
    axios
      .get(process.env.REACT_APP_BASEURL + "?sort=desc")
      .then(({ data }) => {
        this.setState({
          products: data,
        });
      })
      .catch((err) => console.error(err));
  };

  getPopularProducts = () => {
    axios
      .get(process.env.REACT_APP_BASEURL + "/popular")
      .then(({ data }) => {
        this.setState({
          popularProducts: data,
        });
      })
      .catch((err) => console.error(err));
  };

  selectProduct = () => {
    console.log("Clicked");
  };

  componentDidMount() {
    this.getAllProducts();
    this.getPopularProducts();
  }

  render() {
    const { products } = this.state;
    const { popularProducts } = this.state;
    return (
      <div id='new'>
        <div className='container'>
          <div className='head'>
            <h2>New</h2>
            <span className='text-muted'>You've never seen it before!</span>
          </div>
          <div className='flex-list'>
            {products.data &&
              products.data.map(
                ({ product_name, product_price, image, product_brand, id, product_rating }) => {
                  return (
                    <CollectionItem
                      click={this.selectProduct}
                      idUrl={`/product/${id}`}
                      key={id}
                      name={product_name}
                      price={`Rp. ${product_price}`}
                      brand={product_brand}
                      img={image}
                      rating={product_rating}
                    />
                  );
                }
              )}
          </div>
        </div>
        <div className='container'>
          <div className='head'>
            <h2>Popular</h2>
            <span className='text-muted'>
              Find clothes that are trending recently
            </span>
          </div>
          <div className='flex-list'>
            {popularProducts.data &&
              popularProducts.data.map(
                ({ product_name, product_price, image, product_brand, id, product_rating }) => {
                  return (
                    <CollectionItem
                      click={this.selectProduct}
                      idUrl={`/product/${id}`}
                      key={id}
                      name={product_name}
                      price={`Rp. ${product_price}`}
                      brand={product_brand}
                      img={image}
                      rating={product_rating}
                    />
                  );
                }
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default CollectionPreview;
