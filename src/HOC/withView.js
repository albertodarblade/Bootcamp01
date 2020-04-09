import React from 'react';
import View from '../Components/View';

function withView(Component) {

  function WrappedComponent(props) {
    console.log(props);
    return (
      <View {...props}>
        <Component {...props} />
      </View>
    );
  }

  return WrappedComponent;

}

export default withView;