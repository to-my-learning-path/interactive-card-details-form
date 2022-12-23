import { useState } from "react";
import "./App.css";

import Form from "./components/Form";

import CardFrontImg from "./assets/images/bg-card-front.png";
import CardBackImg from "./assets/images/bg-card-back.png";
import CompleteImg from "./assets/images/icon-complete.svg";
import CardLogo from "./assets/images/card-logo.svg";

const initalState = {
  name: "Jane Appleseed",
  number: "0000 0000 0000 0000",
  expirationMonth: "00",
  expirationYear: "00",
  csc: "000",
};

function App() {
  const [cardInfo, setCardInfo] = useState(initalState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (data) => {
    setCardInfo(data);
    setIsSubmitted(true);
  };

  const handleChange = (event) => {
    setCardInfo({
      ...cardInfo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <main>
      <section className="credit-card__display">
        <CreditCardDisplay cardInfo={cardInfo} />
      </section>
      <section className="credit-card__form">
        {isSubmitted ? (
          <ThankYouDisplay />
        ) : (
          <Form handleFormSubmit={handleSubmit} handleChange={handleChange} />
        )}
      </section>
    </main>
  );
}

const ThankYouDisplay = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div className="thank-you__display">
      <img src={CompleteImg} alt="" />
      <h1>Thank you!</h1>
      <p>We've added your card details</p>
      <button onClick={refreshPage}>Continue</button>
    </div>
  );
};

const CreditCardDisplay = ({ cardInfo }) => {
  return (
    <>
      <div className="credit-card__front">
        <img src={CardFrontImg} alt="" />
        <div className="front-card__content">
          <img src={CardLogo} alt="" />
          <p>
            {cardInfo.number.length > 0 ? cardInfo.number : initalState.number}
          </p>
          <div className="two-columns">
            <p>{cardInfo.name.length > 0 ? cardInfo.name : initalState.name}</p>
            <p>
              {cardInfo.expirationMonth > 0
                ? cardInfo.expirationMonth
                : initalState.expirationMonth}
              /
              {cardInfo.expirationYear.length
                ? cardInfo.expirationYear
                : initalState.expirationYear}
            </p>
          </div>
        </div>
      </div>
      <div className="credit-card__back">
        <img src={CardBackImg} alt="" />
        <p className="back-card__content">
          {cardInfo.csc.length > 0 ? cardInfo.csc : initalState.csc}
        </p>
      </div>
    </>
  );
};

export default App;
