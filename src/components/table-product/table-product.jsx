import React from "react";
import {Link} from "react-router-dom";

const TableProduct = ({id,name, updateAt, createAt, click, idUrl}) => {
  return (
    <tbody>
      <tr>
        <th scope='row'>{id}</th>
        <td><Link to={idUrl}>{name}</Link></td>
        <td>{updateAt}</td>
        <td>{createAt}</td>
        <td>
          <button type='button' class='btn btn-danger' onClick={click}>
            Delete!
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default TableProduct;