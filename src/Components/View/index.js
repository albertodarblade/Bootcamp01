import React from 'react';
import classnames from 'classnames';

function View({ loading, error, children }) {
  const componentClass = classnames({
    emLoading: loading
  })
return <section className={componentClass}>
  <div>{error.message}</div>
  {children}
</section>
}

View.defaultProps = {
  error: {}
};

export default View;