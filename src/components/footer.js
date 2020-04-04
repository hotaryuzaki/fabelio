import React from 'react';

function Footer() {
  const y = new Date().getFullYear();
  
  return (
    <footer>
      <p>Copyrights &copy; {y} Ahmad Amri</p>
    </footer>
  )
}

export default Footer;
