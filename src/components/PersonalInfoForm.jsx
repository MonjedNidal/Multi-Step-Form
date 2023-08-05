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
}) {
  return (
    <form className="personalInfoForm d-flex flex-column">
      <div className="formHeader">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <label htmlFor="nameInput">Name</label>
            {nameError && <span>This field is required</span>}
          </div>
          <input
            className={`${nameError ? "inputError" : ""}`}
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
            className={`${emailError ? "inputError" : ""}`}
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
            className={`${phoneError ? "inputError" : ""}`}
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
        </div>
      </div>
    </form>
  );
}

export default PersonalInfoForm;
