import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="" />
        <input type="submit" value="Search" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
