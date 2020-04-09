import React from 'react';

function withTurn(Component) {

  function calculateTurn() {
    const today = new Date();
    const hours = today.getHours();
    if(hours < 12) {
      return 'morning'
    }

    if(hours < 18) {
      return 'afternoon'
    }

    if(hours < 24) {
      return 'evening'
    }
    return 'not working ours';
  }

  function WrappedComponent(props) {
    console.log(props);
    const turn = calculateTurn();
    return (
      <Component {...props} turn={turn} />
    );
  }

  return WrappedComponent;

}

export default withTurn;