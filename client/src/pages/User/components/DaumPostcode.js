import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function SerchAddress(props) {
  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "15%",
    width: "500px",
    height: "55vh",
    zIndex: 100,
  };

  const handleComplete = (data) => {
    props.setAddress(data.address);
    props.setPostCode(data.zonecode);
  };

  return <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />;
}
