import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{ textAlign: 'center', padding: '15px' }}>
      <RotatingLines
        visible={true}
        height="100"
        width="100"
        color="yellow"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};
export default Loader;
