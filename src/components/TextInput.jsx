function TextInput({
  id,
  type,
  placeholder,
  value,
  isError,
  setValue,
  setError,
  label,
}) {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between">
        <label htmlFor={`${id}`}>{label}</label>
        {isError && <span>This field is required</span>}
      </div>
      <input
        className={`textInput ${isError ? "inputError" : ""}`}
        onChange={(e) => {
          setValue(e.target.value);
          if (!e.target.value) {
            setError(true);
          } else {
            setError(false);
          }
        }}
        value={value}
        type={`${type}`}
        id={`${id}`}
        placeholder={`${placeholder}`}
      />
    </div>
  );
}

export default TextInput;
