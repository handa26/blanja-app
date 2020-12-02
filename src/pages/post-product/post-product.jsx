import React from "react";
import Navbar from "../../components/navbar/header";
import PostProduct from "../../components/post-product/post-product";
import Sidebar from "../../components/sidebar/sidebar";

const AddProduct = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <br />
        <center>
          <h2>Form Tambah Produk</h2>
        </center>
        <div className='row'>
          <div className="col-2">
            <Sidebar />
          </div>
          <div className='col-10'>
            <PostProduct />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;