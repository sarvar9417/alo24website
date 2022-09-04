import React from "react";

const Button = ({ styles, title, link }) => (
  <a href={link} type="button" className={`ml-3 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      {title}
  </a>
);

export default Button;
