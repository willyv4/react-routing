import { Link } from "react-router-dom";
import "./ColorList.css";

const ColorList = ({ colors }) => {
  return (
    <div>
      <h3>Choose a color buddy.</h3>
      <div className="button-container">
        {colors.map((c) => (
          <Link
            className="buttons"
            key={c.colorId}
            to={`/colors/${c.colorName}`}
            style={{ backgroundColor: c.colorId }}
          >
            {c.colorName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ColorList;
