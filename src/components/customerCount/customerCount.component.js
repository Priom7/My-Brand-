import React from "react";
import CountUp from "react-countup";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import PeopleIcon from "@material-ui/icons/People";
import "./customerCount.style.scss";

function CustomerCount() {
  return (
    <div className='customer'>
      <div className='customer__total'>
        <h1 className='customer__totalTitle'>
          Total Happy Customers{" "}
        </h1>
        <h3 className='customer__totalNumber'>
          {" "}
          <InsertEmoticonIcon></InsertEmoticonIcon>
          <CountUp
            start={0}
            end={100000}
            duration={2}
          ></CountUp>
        </h3>
      </div>
      <div className='customer__total'>
        <h1 className='customer__dailyTitle'>
          Daily Customers{" "}
        </h1>
        <h3 className='customer__dailyNumber'>
          {" "}
          <PeopleIcon></PeopleIcon>
          <CountUp
            start={0}
            end={1000}
            duration={2}
          ></CountUp>
        </h3>
      </div>
    </div>
  );
}

export default CustomerCount;
