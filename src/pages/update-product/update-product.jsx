import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

class UpdateProduct extends Component {
  state = {
    product_name: "",
    category_id: "",
    product_price: "",
    product_description: "",
    product_rating: "",
    size: "",
    product_brand: "",
    product_qty: "",
    product_color: "",
    image: "",
  };

  getProduct = () => {
    const { match } = this.props;
    axios
      .get("http://localhost:3000/product/" + match.params.id)
      .then(({ data }) => {
        this.setState({
          product: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount = async () => {
    const { match } = this.props;
    const res = await axios.get(
      "http://localhost:3000/product/" + match.params.id
    );

    const {
      product_name,
      category_id,
      product_price,
      product_description,
      product_rating,
      size,
      product_brand,
      product_qty,
      product_color,
      image,
    } = res.data;

    this.setState({
      product_name: product_name,
      category_id: category_id,
      product_price: product_price,
      product_description: product_description,
      product_rating: product_rating,
      size: size,
      product_brand: product_brand,
      product_qty: product_qty,
      product_color: product_color,
      image: image,
    });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async () => {
    const { match } = this.props;
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();
    await axios.patch(
      "http://localhost:3000/product/" + match.params.id,
      this.state
    );
    this.props.history.push("/");
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  // product_name: "",
  // category_id: "",
  // product_price: "",
  // product_description: "",
  // product_rating: "",
  // size: "",
  // product_brand: "",
  // product_qty: "",
  // product_color: "",
  // image: "",
  //   };
  // }

  // changeHandler = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // changeCategoryHandler() {
  //   const id = document.getElementById("category").value;
  //   this.setState({
  //     category_id: id,
  //   });
  // }

  // submitHandler = (e) => {
  //   const { match } = this.props;
  //   e.preventDefault();
  //   axios
  //     .patch(("http://localhost:3000/product/" + match.params.id), qs.stringify(this.state), config)
  //     .then((response) => {
  //       console.log(response);
  //       this.props.history.push("/");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // componentDidMount() {
  //   const { match } = this.props;
  //   axios.get("http://localhost:3000/product/" + match.params.id).then(({data}) => {
  //     this.setState({
  //       product_name: data.product_name,
  //       category_id: data.category_id,
  //       product_price: data.product_price,
  //       product_description: data.product_description,
  //       product_rating: data.product_rating,
  //       size: data.size,
  //       product_brand: data.product_brand,
  //       product_qty: data.product_qty,
  //       product_color: data.product_color,
  //       image: data.image,
  //     });
  //   })
  // }

  render() {
    const {
      product_name,
      product_brand,
      category_id,
      product_price,
      product_description,
      product_color,
      product_rating,
      image,
      product_qty,
    } = this.state;
    console.log(this.state);
    return (
      <div className='container'>
        <Form onSubmit={this.submitHandler}>
          <Form.Group controlId='formBasicText'>
            <Form.Label>name</Form.Label>
            <Form.Control
              type='text'
              name='product_name'
              value={product_name}
              onChange={this.changeHandler}
              placeholder='nama'
            />
          </Form.Group>

          <Form.Group controlId='formBasicText'>
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type='text'
              name='product_brand'
              value={product_brand}
              onChange={this.changeHandler}
              placeholder='Brand'
            />
          </Form.Group>

          <Form.Group controlId='formBasicText'>
            <Form.Label>Product Color</Form.Label>
            <Form.Control
              type='text'
              name='product_color'
              value={product_color}
              onChange={this.changeHandler}
              placeholder='color'
            />
          </Form.Group>

          <Form.Group controlId='formBasicText'>
            <Form.Label>category</Form.Label>
            <br></br>
            <select
              id='category'
              onChange={(e) => this.changeCategoryHandler()}
            >
              <option disabled selected hidden>
                Pilih kategori
              </option>
              <option value='1'>T-shirt</option>
              <option value='2'>Shorts</option>
              <option value='3'>Jackets</option>
              <option value='4'>Pants</option>
              <option value='5'>Shoes</option>
            </select>
            {/* <Form.Control type="text" name='category_id' value={category_id} onChange={this.changeHandler} placeholder="Password" /> */}
          </Form.Group>
          <Form.Group controlId='formBasicText'>
            <Form.Label>price</Form.Label>
            <Form.Control
              type='text'
              name='product_price'
              value={product_price}
              onChange={this.changeHandler}
              placeholder='Harga'
            />
          </Form.Group>

          <Form.Group controlId='formBasicText'>
            <Form.Label>rating</Form.Label>
            <Form.Control
              type='text'
              name='product_rating'
              value={product_rating}
              onChange={this.changeHandler}
              placeholder='rating'
            />
          </Form.Group>

          <Form.Group controlId='formBasicText'>
            <Form.Label>desc</Form.Label>
            <Form.Control
              type='text'
              name='product_description'
              value={product_description}
              onChange={this.changeHandler}
              placeholder='Deskripsi'
            />
          </Form.Group>

          <Form.Group controlId='formBasicText'>
            <Form.Label>Quantuty</Form.Label>
            <Form.Control
              type='text'
              name='product_qty'
              value={product_qty}
              onChange={this.changeHandler}
              placeholder='Quantity'
            />
          </Form.Group>

          <Form.Group controlId='formBasicText'>
            <Form.Label>image</Form.Label>
            <Form.Control
              type='text'
              name='image'
              value={image}
              onChange={this.changeHandler}
              placeholder='Gambar(Link)'
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default UpdateProduct;
