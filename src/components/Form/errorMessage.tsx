/* eslint-disable react/destructuring-assignment */
import { capitalizeFirstLetter } from "../../util/stringUtil";

const TextInputErrorMessage = (props: any) => {
  return <div style={{ fontSize: "1rem", color: "red" }}>{capitalizeFirstLetter(props.children)}</div>;
};

const renderError = (error: any) => {
  return error && <div style={{ fontSize: "1rem", color: "red" }}> {capitalizeFirstLetter(error)}</div>;
};

export { TextInputErrorMessage, renderError };
