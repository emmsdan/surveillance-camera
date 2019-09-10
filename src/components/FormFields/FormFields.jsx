import React from 'react';
import './FormFields.css';

export const FormInput = ({ id, title, value, noLabel, placeholder, reff }) => {
  return (
    <div className="form-group">
      {noLabel && <label for={id}>{title}</label>}
      <input
        id={id}
        defaultValue={value}
        placeholder={placeholder}
        ref={reff}
      />
    </div>
  );
};

export const FormButton = ({ id, title, type, onClick }) => {
  return (
    <div className="form-group">
      <button id={id} type={type || 'button'} onClick={onClick}>
        {' '}
        {title}{' '}
      </button>
    </div>
  );
};
export const FormOptions = ({ id, title, options }) => {
  options = options.map(option => {
    return <option {...option.att}> {option.att.desc} </option>;
  });
  return (
    <div className="form-group">
      <label for={id}>{title}</label>
      <select id={id}>{options}</select>
    </div>
  );
};
