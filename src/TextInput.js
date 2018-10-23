import React from "react";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";

const TextInput = createReactClass({
  render: function() {
    const { label, id, onChange, value } = this.props;
    return (
      <div>
        <label htmlFor={id}>{label}</label>
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
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
