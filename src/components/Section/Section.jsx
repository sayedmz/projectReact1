import React from "react";
import PropTypes from "prop-types";
export const Section = (props) => {
  const { title, children, ...sectionProps } = props; // ...sectionProps  نستطيع استعمالها لعدة بروبس
  return (
    <section {...sectionProps}>
      <h2> {title} </h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.any,
};
export default Section;
