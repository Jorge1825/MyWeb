import React from "react";

export const Chip = ({ text = "", color = "green" }) => {
  return (
    <div
      style={{
        backgroundColor: "#001529",
        color: 'white',
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
