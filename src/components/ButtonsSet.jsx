function ButtonsSet({
  stepCounter,
  setStepCounter,
  className,
  handleNextPageClicked,
}) {
  return (
    <div
      className={`${className} d-flex flex-row justify-content-between my-3`}
    >
      <a
        onClick={() => {
          setStepCounter(stepCounter - 1);
        }}
        className="backBtn"
        href="#s"
      >
        {stepCounter > 1 && stepCounter <= 4 ? "Go Back" : ""}
      </a>
      {stepCounter !== 5 ? (
        <a onClick={handleNextPageClicked} className=" nextBtn" href="#-">
          {stepCounter !== 4 ? "Next Step" : "Confirm"}
        </a>
      ) : (
        ""
      )}
    </div>
  );
}

export default ButtonsSet;
