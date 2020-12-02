import React from "react";
import axios from "axios";
import TableProduct from "../table-product/table-product";

const getUrl = "http://localhost:3000/products";
const getProductById = "http://localhost:3000/product/";
class ProductsTable extends React.Component {
  state = {
    products: {}
  };

  getAllProducts = () => {
    axios
      .get(getUrl)
      .then(({ data }) => {
        this.setState({ products: data });
      })
      .catch((err) => console.error(err));
  };

  deleteProduct = (id) => {
    axios
      .delete(getProductById + id)
      .then(result => alert('Successfully deleted!'))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getAllProducts();
  }

  render() {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>id</th>
            <th scope='col'>Name</th>
            <th scope='col'>Created At</th>
            <th scope='col'>Updated At</th>
            <th scope='col'>Remove</th>
          </tr>
        </thead>
        {this.state.products.data &&
          this.state.products.data.map(
            ({ product_name, id, created_at, updated_at }) => {
              return (
                <TableProduct
                  key={id}
                  name={product_name}
                  id={id}
                  createAt={created_at}
                  updateAt={updated_at}
                  click={() => this.deleteProduct(id)}
                  idUrl={`/update/${id}`}
                />
              );
            }
          )}
      </table>
    );
  }
}

export default ProductsTable;
