import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <Link
              to={{
                pathname: `./post`,
                state: this.state,
              }}
            >
              Tambah Barang Baru
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `./stock`,
                state: this.state,
              }}
            >
              Products inventory
            </Link>
          </li>
        </ul>
      </>
    );
  }
}
