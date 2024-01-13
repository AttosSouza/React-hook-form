import React from 'react';

const Input = ({
  id,
  label,
  value,
  type,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && (
        <p
          style={{
            color: 'red',
            fontSize: '14px',
            margin: '10px 0',
            maxWidth: '400px',
            lineHeight: '16px',
          }}
        >
          {error}
        </p>
      )}
    </>
  );
};

export default Input;
