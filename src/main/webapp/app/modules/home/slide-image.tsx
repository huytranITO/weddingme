import './home.scss';

import React, { useState, useEffect  } from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Row } from 'reactstrap';


export const SlideWedding = () => {
    const images = [
        'content/images/slides/sl00.jpg',
        'content/images/slides/sl01.jpg',
        'content/images/slides/sl02.jpg',
        'content/images/slides/sl03.jpg',
        'content/images/slides/sl04.jpg',
        'content/images/slides/sl05.jpg',
        'content/images/slides/sl06.jpg',
        'content/images/slides/sl07.jpg',
        'content/images/slides/sl08.jpg'
      ];

    return (
        <Row style={{height: '100%', alignItems: 'center'}} >
            <Zoom 
            scale={0.5} 
            autoplay={true} 
            arrows={false}
            >
            {
                images.map((each, index) => 
                <img key={index} 
                    style={{objectFit: 'scale-down',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'auto',
                    // minHeight: '',
                    // maxHeight: '600px', 
                    height: 'auto',
                    width: '100%'}} 
                    src={each} 
                />)
            }
            </Zoom>
      </Row>
      
    );
}