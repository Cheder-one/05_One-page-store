import React from "react";
import PropTypes from "prop-types";

// Компонент переключения сортировки
const SortSelect = ({ value, options, onSort }) => {
  return (
    <div className="d-flex align-items-center mt-4">
      <span className="d-block me-2">Cортировка:</span>
      <select className="form-select" value={value} onChange={onSort}>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

SortSelect.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  onSort: PropTypes.func.isRequired
};

export default SortSelect;
