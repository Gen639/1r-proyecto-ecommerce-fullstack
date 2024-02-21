import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div>
        <p>&copy; {currentYear} ecommercce project</p>
        <p>Contact: send a pigeon</p>
        <p>Address: somewhere near</p>
      </div>
    </footer>
  );
};

export default Footer;
