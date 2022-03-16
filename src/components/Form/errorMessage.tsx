/* eslint-disable react/destructuring-assignment */
import { capitalizeFirstLetter } from "../../util/stringUtil";
import "./form.css";

const TextInputErrorMessage = (props: any) => {
  return <div className="validation-error-text">{capitalizeFirstLetter(props.children)}</div>;
};

const renderError = (error: any) => {
  return error && <div className="validation-error-text"> {capitalizeFirstLetter(error)}</div>;
};

export { TextInputErrorMessage, renderError };
