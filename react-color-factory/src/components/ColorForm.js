import { useState } from "react";
import "./ColorForm.css";

const ColorForm = ({ handleColors }) => {
  const INITIAL_STATE = { colorId: "", colorName: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleColors(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  console.log(formData);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="colorId">Color:</label>
          <input
            type="color"
            id="colorId"
            name="colorId"
            value={formData.color}
            onChange={handleChange}
          />
        </div>
        <div className="container">
          <label htmlFor="colorName">Color:</label>
          <input
            type="text"
            id="colorName"
            name="colorName"
            value={formData.colorName}
            onChange={handleChange}
          />
        </div>
        {formData.colorId.length > 0 && formData.colorName.length > 0 && (
          <button>Add New Color!</button>
        )}
      </form>
    </div>
  );
};

export default ColorForm;
