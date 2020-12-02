import React from "react";

import "../../styles/filter/filter.css";

const Filter = () => (
  <div className='filter-icon mr-auto'>
    <button
      type='button'
      class='btn btn-outline btn-filter'
      data-toggle='modal'
      data-target='#FilterModal'
    >
      <i className='fas fa-filter'></i>
    </button>

    <div
      className='modal fade'
      id='FilterModal'
      tabindex='-1'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='FilterModalLabel'>
              Filter
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <strong>Colors</strong>
            <br></br>
            <div className='row'>
              <button
                id='1'
                name='color'
                className='btn btn-danger rounded ml-3'
              >
                R
              </button>
              <button
                id='2'
                name='color'
                className='btn btn-success rounded ml-2'
              >
                G
              </button>
              <button
                id='3'
                name='color'
                className='btn btn-primary rounded ml-2'
              >
                B
              </button>
              <button
                id='4'
                name='color'
                className='btn btn-dark rounded ml-2'
              >
                K
              </button>
            </div>
            <div className='dropdown-divider'></div>
            <strong className="mb-2">Category</strong>
            <br></br>
            <button
              id='1'
              name='category'
              className='btn btn-outline-secondary ml-2 mb-2'
            >
              T-shirt
            </button>
            <button
              id='2'
              name='category'
              className='btn btn-outline-secondary ml-2'
            >
              Short
            </button>
            <button
              id='3'
              name='category'
              className='btn btn-outline-secondary ml-2'
            >
              Jacket
            </button>
            <button
              id='4'
              name='category'
              className='btn btn-outline-secondary ml-2'
            >
              Pants
            </button>
            <button
              id='5'
              name='category'
              className='btn btn-outline-secondary ml-2'
            >
              Shoes
            </button>
            <div className='dropdown-divider'></div>
            <strong>Brand</strong>
            <select className='text-muted' style={{ border: "none" }}>
              <option disabled selected hidden>
                Zalora, Adidas, MiHoYo and many More
              </option>
              <option>Zalora Cloth</option>
              <option>Adidas</option>
              <option>MiHoYo</option>
            </select>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-outline-secondary rounded-pill mr-1'
              style={{ width: "200px" }}
              data-dismiss='modal'
            >
              Discard
            </button>
            <button
              type='button'
              className='btn btn-danger rounded-pill ml-auto ml-1'
              style={{ width: "200px" }}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Filter;