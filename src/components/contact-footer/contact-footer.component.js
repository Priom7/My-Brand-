import React from "react";
import "./contact-footer.component.scss";

function ContactFooter() {
  return (
    <div className='contactFooter'>
      <div className='contactFooter__column'>
        <div className='contactFooter__row'>
          <h1 className='contactFooter__rowHeader'>
            Customer Care
          </h1>
          <div className='contactFooter__rowItems'>
            <p className='contactFooter__rowItem'>
              Help Center
            </p>
            <p className='contactFooter__rowItem'>
              How to Buy
            </p>
            <p className='contactFooter__rowItem'>
              Track Your Order
            </p>
            <p className='contactFooter__rowItem'>
              Returns & Refunds
            </p>
          </div>
        </div>

        <div className='contactFooter__row'>
          <h1 className='contactFooter__rowHeader'>
            Social Links
          </h1>
          <div className='contactFooter__rowItems'>
            <p className='contactFooter__rowItem'>
              Facebook
            </p>
            <p className='contactFooter__rowItem'>
              Instagram
            </p>
            <p className='contactFooter__rowItem'>
              Youtube
            </p>
            <p className='contactFooter__rowItem'>
              Tweeter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactFooter;
