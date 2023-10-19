import React, { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
import holidays from "../../Data/holidays.json";
import leaves from "../../Data/leaves.json";
import "./gridlayout.scss";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const Gridlayout = () => {
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds(),
    date: new Date().toLocaleString(),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const convertToTwoDigit = (number) => {
    return number.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    });
  };

  const holidayItems = holidays.map((item) => (
    <div key={item.name} className='holiday-wrapper' style={{ background: `url(${item.img})` }}>
      <div className='next-holiday'>
        <p>Holidays</p>
        <a href='#'>View all</a>
      </div>
      <div className='overlay'>
        <h1>{item.name}</h1>
        <p>{item.date}</p>
        <small>{item.desc}</small>
      </div>
    </div>
  ));

  const leaveItems = leaves.map((item) => (
    <div key={item.leavestype} className='leaves'>
      <h3 style={{ color: item.color }}>{item.remainingleave}</h3>
      <span>{item.leavestype}</span>
    </div>
  ));

  return (
    <GridLayout className='layout' cols={12} rowHeight={30} width={1350}>
      <div key='a' data-grid={{ x: 0, y: 0, w: 3, h: 4, static: true }}>
        <div className='clockin-wrapper'>
          <div className='clock '>
            <div className='time-wrapper d-flex gap-1'>
              <h4 className='hour'>{convertToTwoDigit(time.hours)}</h4>
              <h4 className='minute'>{convertToTwoDigit(time.minutes)}</h4>
              <h4 className='ampm'>{time.hours >= 12 ? ' PM' : ' AM'}</h4>
            </div>
            <div className='date'>Thu 19, 2023</div>
          </div>
          <div className='d-flex w-100'>
            <div className='btn btn-danger justify-content-center w-100'>clock out</div>
          </div>
        </div>
      </div>
      <div key='b' data-grid={{ x: 3, y: 0, w: 3, h: 4, static: true }}>
        {holidayItems}
      </div>
      <div key='c' data-grid={{ x: 6, y: 0, w: 3, h: 4, static: true }}>
        <div className='leave-wrapper'>
          <div className='leave-body'>
            <h3>Leaves</h3>
            <div className='d-flex justify-content-between text-center gap-1'>{leaveItems}</div>
          </div>
          <div className='leave-footer'>
            <a href='#'>Request Leave</a>
            <a href='#'>View All</a>
          </div>
        </div>
      </div>
    </GridLayout>
  );
};

export default Gridlayout;
