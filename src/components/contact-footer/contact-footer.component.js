import React from "react";
import "./contact-footer.component.scss";
import CONTACT_FOOTER_DATA from "../../ALL_DUMMY_DATA/contact-footer.data";
import ContactFooterLinks from "../links/contact-footer-links.component";

class ContactFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact_footer: CONTACT_FOOTER_DATA,
    };
  }

  render() {
    const { contact_footer } = this.state;

    return (
      <div className='contactFooter'>
        <div className='contactFooter__column'>
          {contact_footer.map(
            ({ id, name, ...otherLinks }) => (
              <div key={id} className='contactFooter__row'>
                <h1
                  key={id}
                  className='contactFooter__rowHeader'
                >
                  {name}
                </h1>
                <div className='contactFooter__rowItems'>
                  <ContactFooterLinks
                    key={id}
                    {...otherLinks}
                  ></ContactFooterLinks>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default ContactFooter;
