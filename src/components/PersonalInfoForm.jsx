import TextInput from "./TextInput";

function PersonalInfoForm({
  setNameValue,
  setPhoneValue,
  setEmailValue,
  nameError,
  emailError,
  phoneError,
  setNameError,
  setEmailError,
  setPhoneError,
  nameValue,
  emailValue,
  phoneValue,
}) {
  const inputs = [
    {
      id: "nameInput",
      value: nameValue,
      isError: nameError,
      setError: setNameError,
      setValue: setNameValue,
      type: "text",
      placeholder: "e.g. Stephen King",
      label: "Name",
    },
    {
      id: "emailInput",
      value: emailValue,
      isError: emailError,
      setError: setEmailError,
      setValue: setEmailValue,
      type: "email",
      placeholder: "e.g. stephenking@lorem.com",
      label: "Email",
    },
    {
      id: "phoneInput",
      value: phoneValue,
      isError: phoneError,
      setError: setPhoneError,
      setValue: setPhoneValue,
      type: "phone",
      placeholder: "e.g. +1 234 567 890",
      label: "Phone Number",
    },
  ];

  let inputsArray = inputs.map((input) => (
    <div key={input.id}>
      <TextInput
        id={input.id}
        type={input.type}
        placeholder={input.placeholder}
        value={input.value}
        isError={input.isError}
        setValue={input.setValue}
        setError={input.setError}
        label={input.label}
      />
    </div>
  ));

  return (
    <form className="personalInfoForm d-flex flex-column">
      <div className="formHeader">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div>
        {inputsArray}
        {/* <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <label htmlFor="nameInput">Name</label>
            {nameError && <span>This field is required</span>}
          </div>
          <input
            className={`textInput ${nameError ? "inputError" : ""}`}
            onChange={(e) => {
              setNameValue(e.target.value);
              if (!e.target.value) {
                setNameError(true);
              } else {
                setNameError(false);
              }
            }}
            type="text"
            id="nameInput"
            placeholder="e.g. Stephen King "
          />
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <label htmlFor="emailInput">Email Address</label>
            {emailError && <span>This field is required</span>}
          </div>
          <input
            className={`textInput ${emailError ? "inputError" : ""}`}
            onChange={(e) => {
              setEmailValue(e.target.value);
              if (!e.target.value) {
                setEmailError(true);
              } else {
                setEmailError(false);
              }
            }}
            type="email"
            id="emailInput"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <label htmlFor="phoneInput">Phone Number</label>
            {phoneError && <span>This field is required</span>}
          </div>
          <input
            className={`textInput ${phoneError ? "inputError" : ""}`}
            onChange={(e) => {
              setPhoneValue(e.target.value);
              if (!e.target.value) {
                setPhoneError(true);
              } else {
                setPhoneError(false);
              }
            }}
            type="phone"
            id="phoneInput"
            placeholder=" e.g. +1 234 567 890"
          />
        </div> */}
      </div>
    </form>
  );
}

export default PersonalInfoForm;
