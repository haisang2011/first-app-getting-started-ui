import { Rings } from 'react-loader-spinner';

interface SpinnerProps {
  height?: number;
  width?: number;
  wrapperStyle?: {};
  wrapperClass?: string;
}

const Spinner = ({
  height = 80,
  width = 80,
  wrapperClass = "",
  wrapperStyle = {}
}: SpinnerProps) => {
  return (
    <Rings
      height={height}
      width={width}
      color="#4fa94d"
      radius="6"
      wrapperStyle={wrapperStyle}
      wrapperClass={wrapperClass}
      visible={true}
      ariaLabel="rings-loading"
    />
  )
}

export default Spinner;