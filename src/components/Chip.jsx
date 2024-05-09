import PropTypes from "prop-types";

export const Chip = ({ text, color }) => {
  return (
    <div
      style={{
        backgroundColor: "#001529",
        color: "white",
        padding: "5px",
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "10px",
        marginBottom: "10px",
        fontSize: "12px",
        fontWeight: "bold",
        cursor: "pointer",
        width: "fit-content",
        minWidth: "fit-content",
        maxWidth: "fit-content",
        height: "fit-content",
        minHeight: "fit-content",
        maxHeight: "fit-content",
      }}
    >
      <div
        style={{
          backgroundColor: color,
          color: { color },
          padding: "5px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "5px",
        }}
      ></div>
      <span>{text}</span>
    </div>
  );
};

Chip.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Chip.defaultProps = {
  color: "green",
};