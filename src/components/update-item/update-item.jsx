import React from "react";
import { Form, Button } from "react-bootstrap";

class UpdateItem extends React.Component {
  render() {
    // const {
    //   product_name,
    //   product_brand,
    //   category_id,
    //   product_price,
    //   product_description,
    //   product_color,
    //   product_rating,
    //   image,
    //   product_qty,
    // } = this.state;
    const {
      name,
      brand,
      id,
      price,
      description,
      color,
      rating,
      qty,
    } = this.props;
    return (
      <div className='container'>
        <h1>{name}</h1>
        <Form onSubmit={this.submitHandler}>
          <Form.Group controlId='formBasicText'>
            <Form.Label>name</Form.Label>
            <Form.Control
              type='text'
              name='product_name'
              value={name}
              onChange={this.changeHandler}
              // placeholder={product_name}
            />
          </Form.Group>

          <Form.Group controlId='formBasicText'>
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type='text'
              name='product_brand'
              // value={product_brand}
              onChange={this.changeHandler}
              placeholder='Brand'
            />
          </Form.Group>

          <Form.Group controlId='formBasicText'>
            <Form.Label>Product Color</Form.Label>
            <Form.Control
              type='text'
              name='product_color'
              // value={product_color}
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
              // value={product_price}
              onChange={this.changeHandler}
              placeholder='Harga'
            />
          </Form.Group>

          <Form.Group controlId='formBasicText'>
            <Form.Label>rating</Form.Label>
            <Form.Control
              type='text'
              name='product_rating'
              // value={product_rating}
              onChange={this.changeHandler}
              placeholder='rating'
            />
          </Form.Group>

          <Form.Group controlId='formBasicText'>
            <Form.Label>desc</Form.Label>
            <Form.Control
              type='text'
              name='product_description'
              // value={product_description}
              onChange={this.changeHandler}
              placeholder='Deskripsi'
            />
          </Form.Group>

          <Form.Group controlId='formBasicText'>
            <Form.Label>Quantuty</Form.Label>
            <Form.Control
              type='text'
              name='product_qty'
              // value={product_qty}
              onChange={this.changeHandler}
              placeholder='Quantity'
            />
          </Form.Group>

          <Form.Group controlId='formBasicText'>
            <Form.Label>image</Form.Label>
            <Form.Control
              type='text'
              name='image'
              // value={image}
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

export default UpdateItem;