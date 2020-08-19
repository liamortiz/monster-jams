import React from 'react';

const Footer = () => {
    return (
        <div class="footer">
            <div className="footer-copyright text-center py-3" onClick={()=>{window.open('http://learn.co/','_blank')}}>
                Copyright © {new Date().toISOString().substring(0, 4)} | Liam & Julian Co.
            </div>   
        </div>
    );
};

export default Footer;