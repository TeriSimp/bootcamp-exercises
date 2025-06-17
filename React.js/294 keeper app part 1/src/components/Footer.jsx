import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      © {year} Keeper App. All rights reserved.
    </footer>
  );
}

export default Footer;
