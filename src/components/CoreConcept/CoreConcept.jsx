import React from "react";
import { PropTypes } from "prop-types";
const CoreConcept = (props) => {
  const { image, title, description } = props;
  return (
    <li>
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};
CoreConcept.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
export default CoreConcept;
