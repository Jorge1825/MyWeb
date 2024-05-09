import "../styles/components/loading.sass";
import PropTypes from "prop-types";

export function Loading({ size }) {
  return (
    <div
      className="loader"
      style={{
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <img
        style={{
          borderRadius: "50%",
          width: `${size}px`,
          height: `${size}px`,
        }}
        className="img-loader "
        src="/src/assets/images/Logo.png"
        alt="loading"
      />
    </div>
  );
}

Loading.propTypes = {
  size: PropTypes.number,
};

Loading.defaultProps = {
  size: 20,
};
