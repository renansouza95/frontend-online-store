import React, { Component } from 'react';
import '../../Style/card.css';

class index extends Component {
  constructor() {
    super();
}

  render() {
    console.log(this);
    return (
      <div className="card-product">
        <h3>Product title</h3>
        <img src="" alt="" />
        <p>price</p>
      </div>
    );
  }
}

export default index;
