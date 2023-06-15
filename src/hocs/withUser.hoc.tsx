import React from 'react';

export default (Component: React.FunctionComponent) => {
  return (props: any) => {
    return (
      <div>
        <Component {...props} />
      </div>
    );
  }
} 