import React from "react";
import axios from "axios";
import ProductDetails from "../../components/product-details/product-details";

const getUrl = "http://localhost:3000/product/";

class Product extends React.Component {
  state = {
    product: [],
  };

  getSingleProduct = () => {
    const { match } = this.props;
    axios
      .get(getUrl + match.params.id)
      .then(({ data }) => {
        this.setState({ product: data });
      })
      .catch((err) => console.error(err));
  };

  componentDidMount() {
    this.getSingleProduct();
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <ProductDetails
          name={product.product_name}
          desc={product.product_description}
          image={product.image}
          price={product.product_price}
          brand={product.product_brand}
          category={product.category_name}
          rating={product.product_rating}
        />
      </div>
    );
  }
}

export default Product;
