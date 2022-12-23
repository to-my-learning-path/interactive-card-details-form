import React from "react";
import "./Form.css";

import { useForm } from "react-hook-form";

const Form = ({ handleFormSubmit, handleChange }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerOptions = {
    name: {
      required: "Can't be blank",
      pattern: {
        message: "Full name is required",
      },
    },
    number: {
      required: "Can't be blank",
      pattern: {
        value: /(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/,
        message: "Wrong format, numbers only",
      },
    },
    expirationMonth: {
      required: "Can't be blank",
      minLength: {
        value: 2,
        message: "min length is 2",
      },
    },
    expirationYear: {
      required: "Can't be blank",
      minLength: {
        value: 2,
        message: "min length is 2",
      },
    },
    csc: {
      required: "Can't be blank",
      minLength: {
        value: 3,
        message: "min length is 3",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="form__item">
        <label htmlFor="name">Cardholder Name</label>
        <input
          id="name"
          placeholder="e.g. Jane Appleseed"
          autoComplete="cc-name"
          {...register("name", registerOptions.name)}
          onChange={handleChange}
          className={errors.name ? "invalid-border" : ""}
        />
        <p className="invalid-text">{errors.name?.message}</p>
      </div>

      <div className="form__item">
        <label htmlFor="number">Card Number</label>
        <input
          id="number"
          placeholder="e.g. 1234 5678 9123 0000"
          autoComplete="cc-number"
          inputMode="numeric"
          {...register("number", registerOptions.number)}
          onChange={handleChange}
          className={errors.name ? "invalid-border" : ""}
        />
        <p className="invalid-text">{errors.number?.message}</p>
      </div>
      <div className="form__section">
        <div className="form__item">
          <label htmlFor="exp">Exp. Date (MM/YY)</label>
          <div className="exp-date__inputs">
            <div className="input__item">
              <input
                id="expiration-month"
                name="expirationMonth"
                placeholder="MM"
                autoComplete="cc-exp"
                maxLength="2"
                {...register(
                  "expirationMonth",
                  registerOptions.expirationMonth
                )}
                onChange={handleChange}
                className={errors.name ? "invalid-border" : ""}
              />
              <p className="invalid-text">{errors.expirationMonth?.message}</p>
            </div>
            <div className="input__item">
              <input
                id="expiration-year"
                name="expirationYear"
                placeholder="YY"
                autoComplete="cc-exp"
                maxLength="2"
                {...register("expirationYear", registerOptions.expirationYear)}
                onChange={handleChange}
                className={errors.name ? "invalid-border" : ""}
              />
              <p className="invalid-text">{errors.expirationYear?.message}</p>
            </div>
          </div>
        </div>

        <div className="form__item">
          <label htmlFor="cc-csc">CVC</label>
          <input
            id="csc"
            name="csc"
            placeholder="e.g. 123"
            autoComplete="cc-csc"
            inputMode="numeric"
            maxLength="3"
            {...register("csc", registerOptions.csc)}
            onChange={handleChange}
            className={errors.name ? "invalid-border" : ""}
          />
          <p className="invalid-text">{errors.csc?.message}</p>
        </div>
      </div>

      <button type="submit">Confirm</button>
    </form>
  );
};

export default Form;
