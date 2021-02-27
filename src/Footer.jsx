import React from 'react';

const copyRightYear = new Date().getFullYear();
const Footer = () =>{
    return<>
        <footer className="footer-cls">
            <p>Copyright ©  {copyRightYear}.  All rights reserved</p>
        </footer>
    </>
    
}

export default Footer;