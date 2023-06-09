import { useParams, useNavigate } from "react-router-dom";

import "./Color.css";

const Color = ({ colors }) => {
  const { color } = useParams();
  const navigate = useNavigate();

  const currColor = colors.find((c) => c.colorName === color);

  if (!currColor) {
    return navigate("/");
  }

  const colorStyle = {
    backgroundColor: currColor.colorId,
  };

  return (
    <div className="background" style={colorStyle}>
      {currColor.colorName.toUpperCase()}
    </div>
  );
};

export default Color;
