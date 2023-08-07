import "../css/LastPage.css";
import ThankYouSVG from "../assets/images/icon-thank-you.svg";
function LastPage() {
  return (
    <div className="lastPage d-flex flex-column justify-content-center align-items-center">
      <img src={ThankYouSVG} alt="" />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        monjed1010@gmail.com
      </p>
    </div>
  );
}

export default LastPage;
