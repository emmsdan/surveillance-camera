import React from 'react';
import './FormFields.css';

export const FormInput = ({ id, title, value, noLabel }) => {
  return (
    <div className="form-group">
      {noLabel && <label for={id}>{title}</label>}
      <input id={id} defaultValue={value} />
    </div>
  );
};

export const FormButton = ({ id, title }) => {
  return (
    <div className="form-group">
      <button id={id}> {title} </button>
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
