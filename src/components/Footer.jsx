import React from "react";

const YEAR = new Date().getUTCFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright {YEAR}</p>
    </footer>
  );
}

export default Footer;
