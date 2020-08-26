import React from "react";
import CountUp from "react-countup";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import PeopleIcon from "@material-ui/icons/People";
import "./customerCount.style.scss";
import CUSTOMER_COUNT from "../../ALL_DUMMY_DATA/customer-count.data";

class CustomerCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer_count: CUSTOMER_COUNT,
    };
  }
  render() {
    const { customer_count } = this.state;

    return (
      <div className='customer'>
        {customer_count.map(({ id, name, count }) => (
          <div key={id} className='customer__total'>
            <h1 key={id} className='customer__totalTitle'>
              {name}
            </h1>
            <h3 className='customer__totalNumber'>
              {" "}
              {name === "Daily Customers" ? (
                <PeopleIcon></PeopleIcon>
              ) : (
                <InsertEmoticonIcon></InsertEmoticonIcon>
              )}
              <CountUp
                start={0}
                end={count}
                duration={2}
              ></CountUp>
            </h3>
          </div>
        ))}
      </div>
    );
  }
}

export default CustomerCount;
