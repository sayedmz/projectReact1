import React from "react";
import propTypes from "prop-types";
import Section from "../Section/Section";
export const Tabs = (props) => {
  const { tabs, children, buttonContainer } = props;
  const ButtonContainer = buttonContainer;
  return (
    <Section title="Example" className="exemples">
      <ButtonContainer>{tabs}</ButtonContainer>
      {children}
    </Section>
  );
};
Tabs.defaultProps = {
  buttonContainer: "menu",
};
Tabs.propTypes = {
  children: propTypes.node,
  tabs: propTypes.node,
  buttonContainer: propTypes.any,
};
export default Tabs;
