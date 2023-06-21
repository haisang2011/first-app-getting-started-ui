import React from 'react';
import SpinnerComponent from '@Common/spinner';

const spinnerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

export default (Component: React.FunctionComponent) => {
  return (props: any) => {
    return (
      <React.Suspense fallback={<SpinnerComponent height={240} width={240} wrapperStyle={spinnerStyle} />}>
        <Component {...props} />
      </React.Suspense>
    );
  }
} 