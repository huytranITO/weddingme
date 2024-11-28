import './home.scss';

import React, { useState, useEffect  } from 'react';
import moment from 'moment';
import { Col, Row } from 'reactstrap';

export const CountDown = () => {
    const timeTillDate = '05 12 2024, 10:30 am: ';
    const timeFormat="MM DD YYYY, h:mm a";

    const [today, setDate] = React.useState(new Date());
    const [then, setThen] = useState(moment(today));
    const [now, setNow] = useState(moment());
    const [countdown, setCountdown] = useState(moment(then.diff(now)));
    const [days, setDays] = useState(countdown.format('D'));
    const [hours, setHours] = useState(countdown.format('HH'));
    const [minutes, setMinutes] = useState(countdown.format('mm'));
    const [seconds, setSeconds] = useState(countdown.format('ss'));
    
    const mapNumber = (number, in_min, in_max, out_min, out_max) => {
        return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    } 

    const daysRadius = mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    const polarToCartesian = (centerX, centerY, radius, angleInDegrees) =>{
        var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
        return {
          x: centerX + (radius * Math.cos(angleInRadians)),
          y: centerY + (radius * Math.sin(angleInRadians))
        };
      }
      
    const describeArc = (x, y, radius, startAngle, endAngle) => {
      
        var start = polarToCartesian(x, y, radius, endAngle);
        var end = polarToCartesian(x, y, radius, startAngle);
    
        var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
        var d = [
            "M", start.x, start.y, 
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(" ");
        return d;       
    }
      
    

    const SVGCircle = ({ radius }) => (
        <svg className='countdown-svg'>
            <path fill="none" stroke="#333" strokeWidth="2" d={describeArc(32, 32, 28, 0, radius)}/>
        </svg>
    );

    useEffect(() => {
        const timer = setInterval(() => {
        let now = moment(new Date());
        let then = moment(timeTillDate, timeFormat)
        let countdown = moment(then.diff(now));
        setDays(countdown.format('D'));
        setHours(countdown.format('HH'));
        setMinutes(countdown.format('mm'));
        setSeconds(countdown.format('ss'));
      }, 1000);
      return () => {
        clearInterval(timer);
      }
    }, [today]);

    return (
        <Row className='countdown-wrapper' sm="12">
            {days && (
                <Col className='countdown-item' sm="3">
                    <SVGCircle radius={daysRadius} />
                    {days} 
                    <span>Ngày</span>
                </Col>
            )}
            {hours && (
                <Col className='countdown-item' sm="3">							
                    <SVGCircle radius={hoursRadius} />
                    {hours} 
                    <span>Giờ</span>
                </Col>
            )}
            {minutes && (
                <Col className='countdown-item' sm="3">
                    <SVGCircle radius={minutesRadius} />
                    {minutes} 
                    <span>Phút</span>
                </Col>
            )}
            {seconds && (
                <Col className='countdown-item' sm="3">
                    <SVGCircle radius={secondsRadius} />
                    {seconds} 
                    <span>Giây</span>
                </Col>
            )}
        </Row>
    )
}