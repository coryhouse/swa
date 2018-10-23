import React from "react";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";

const TextInput = createReactClass({
  render: function() {
    const { label, id, onChange, value, name, showLabel } = this.props;
    return (
      <div>
        {showLabel && <label htmlFor={id}>{label}</label>}
        <br />
        <input
          id={id}
          type="text"
          name={name}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
});

TextInput.propTypes = {
  showLabel: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextInput.defaultProps = {
  showLabel: true
};

export default TextInput;
