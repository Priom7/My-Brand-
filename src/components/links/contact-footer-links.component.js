import React from "react";
import "./contact-footer-links.style.scss";

function ContactFooterLinks({ links }) {
  return (
    <div>
      {links.map(({ id, name, link }) => (
        <p key={id} className='contactFooter__rowItem'>
          {name}
        </p>
      ))}
    </div>
  );
}

export default ContactFooterLinks;
