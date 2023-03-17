const InputContainer = ({ onInputChange, val, label, name }) => {
  return (
    <div className={`editModal_input`}>
      <label>{label}:</label>
      <input
        type="input"
        value={val}
        data-testid={name}
        name={name}
        onChange={(e) => onInputChange(e)}
      />
      {/* {error && (
        <span className="error" data-cy={`${name}_error`}>
          Must have {label}
        </span>
      )} */}
    </div>
  );
};

export default InputContainer;
