import React from "react";
// import './Footer.style.scss'


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <styledFooter>
      <footer>
        <div className="footer">
          <p>&copy; {currentYear} ecommercce project</p>
         <p>Contact: send a pigeon</p>
          <p>Address: somewhere near</p>
        </div>
      </footer>
    </styledFooter>
      
  );
};

export default Footer;



// import React from "react";
// import styled from 'styled-components'; 

// const StyledFooter = styled.footer`
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   height: 100px; 
//   background-color: #333; 
//   color: #fff;
//   text-align: center;
//   padding: 20px;
// `;

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   return (
//    <StyledFooter> 
//      <div>
//         <p>&copy; {currentYear} ecommercce project</p>
//         <p>Contact: send a pigeon</p>
//         <p>Address: somewhere near</p>
//       </div>
//    </StyledFooter>
//   );
// };

// export default Footer;
