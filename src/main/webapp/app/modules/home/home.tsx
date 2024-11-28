import './home.scss';
import React, {useState, useEffect, useMemo} from 'react';
import { Row, Col } from 'reactstrap';
import {CountDown} from 'app/modules/home/countdown';
import {SlideWedding} from 'app/modules/home/slide-image'
import {TimeLineEvent} from 'app/modules/home/timeline-event'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const Home = () => {
  // const account = useAppSelector(state => state.authentication.account);
  // 1 GD, 2 ban
  const pathname = decodeURI(window.location.pathname);
  let structs = pathname?.split('/');
  const [auto, setAuto] = React.useState(true);
  const [qr, setQR] = React.useState('H');
  const [disble, setDisble] = React.useState(true);
  const [modal, setModal] = useState(false);
  const [audio, setAudio] = React.useState(window.document.getElementById('audio-wedding'))

  const toggle = (type: string) => {
    setQR(type);
    setModal(!modal);
  }

  const createHeart = () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 2 + "s";
    
    heart.innerText = '💗';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
                heart.remove();
                }, 900);
  }

  useEffect(()=> {
    console.log("1111---",  window.document.getElementById('audio-wedding'))
    if(audio !== null && audio !== undefined) {
      let mp3Music = document.getElementById('audio-wedding');
      // mp3Music.onplay();
      mp3Music.onload
      window.document.getElementById('audio-wedding').onplay
    }
    console.log("v5")
    let audioMusic = new Audio("./content/images/music/audio.mp3");
    audioMusic.play()
  }, [audio, new Date()])

  useEffect(() => {
    console.log("v5")
    setInterval(createHeart, 400);
    
    setInterval(() => {
      setAuto(true)
      setAudio(window.document.getElementById('audio-wedding'))
      setDisble(false)
    }, 5000);
  }, []);

  return (
    <Row>
      <Col>
        <Row style={{
          justifyContent: 'center', 
          display: 'flex',
          textAlign: 'center',
          whiteSpace:'nowrap',
          }}>
            <Col></Col>
            <Col 
             xl={5} sm={5} md={5} xs="5"
            style={{fontFamily: 'Gravitas+One',
                  backgroundRepeat: 'round',
                  backgroundSize: 'cover',
                  width: '12rem',
                  height: '11rem',
                  backgroundImage:'url(content/images/wellcome.jpg)'}}>
      
                    <br></br>
                    <br></br>
                    <br></br>
                    <p></p>
                    <span style={{fontSize: 16}}>10h30</span>
               <span style={{fontSize: 22}}> 13/05</span>
                <p style={{fontSize: 22}}>2024 </p>
              </Col>
            <Col></Col>
        </Row>
        {new Date() > new Date("2025/05/13") ?  <Row></Row> : <Row sm="12" md= "12" lg="12">
          <Col sm="12" style={{margin: '10px 5px'}}>
            <CountDown/>
          </Col>
        </Row>}
        <Row style={{whiteSpace: 'nowrap'}}>
          <Col xl={6} sm={6} md={6} xs="6" 
          style={{display:'flex', justifyContent: 'center'}}>
            <div id="avatar_women"></div>
          </Col>
          <Col xl={6} sm={6} md={6} xs="6" 
          style={{display:'flex', 
          justifyContent: 'center'
          }}>
            <div id="avatar_men"></div>
          </Col>
        </Row>
        
        <Row style={{marginTop: 10}}>
          <Col style={{justifyContent: 'center',
          textAlign: 'center', 
          fontFamily: 'Gravitas+One',
          fontWeight: '600' }}>
            Trần Thọ Huy
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <Button color="danger" 
              onClick={() => toggle('H')} 
              disabled={disble}
              size='sm'
              style={{width: 120, marginTop: 5}}>
                Mừng cưới
              </Button>
          </div>
          </Col>
          <Col style={{justifyContent: 'center', 
          textAlign: 'center', 
          fontFamily: 'Gravitas+One',
          fontWeight: '600'}}>
            Lê Thanh Thúy
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <Button 
              color="danger" 
              onClick={() => toggle('T')} 
              disabled={disble}
              size='sm'
              style={{width: 120, marginTop: 5}}>
                Mừng cưới
              </Button>
          </div>
          </Col>
          
        </Row>
        <Row sm="12" md= "12" lg="12" style={{
          justifyContent: 'center', 
          fontFamily: 'Carattere',
          margin: '20px 0px',
          display: 'flex', 
          fontSize: 20,
          height:100,
          marginRight: window.innerWidth < 700 ? '0%' : '3%',
          marginLeft: window.innerWidth < 700 ? '0%' : '3%',
          textAlign: 'center',
          whiteSpace:'nowrap',
          backgroundRepeat: 'round',
          backgroundSize: '100%',
          fontWeight: 300,
          backgroundImage: 'url(content/images/back_2.jpg)',
          alignItems: 'center'
        }}
          >
          <span>{'Kính mời: '+ structs[1]}</span>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Col sm="12" md= "12" lg="12" className='test1'>
            <SlideWedding/>
          </Col>
        </Row>
        <Row sm="12" md= "12" lg="12" style={{
          justifyContent: 'center', 
          fontFamily: 'Carattere',
          margin: '5px 0px',
          display: 'flex', 
          fontSize: 28,
          marginRight: window.innerWidth < 700 ? '0%' : '3%',
          marginLeft: window.innerWidth < 700 ? '0%' : '3%',
          textAlign: 'center',
          whiteSpace:'nowrap',
          backgroundRepeat: 'round',
          backgroundSize: '100%',
          fontWeight: 400,
          alignItems: 'center'
        }}
          >
          <span>Save the Date</span>
        </Row>
        <Row style={{marginTop: 15}}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/LI-hoSqQCMQ?si=XzD4yZ8RXpiekaKt&autoplay=1&mute=1" title="Wedding me" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
          </iframe>
        </Row>
        <Row sm="12" md= "12" lg="12"> 
          <Col sm="12" style={{marginTop: 15}}>
            <TimeLineEvent/>
          </Col>
        </Row>
        <audio style={{height: '0px'}}
          controls autoPlay={auto} id='audio-wedding' 
          src={"https://huythuy.weddingme.net/content/images/music/audio.mp3"} 
          typeof="audio/mpeg">
            
        </audio>
      </Col>
      <Modal isOpen={modal} 
        onClick={() => toggle(null)} 
        centered
        style={{height: window.innerWidth > 700 ? window.innerWidth/2:  window.innerWidth*2/3 , width: window.innerWidth*2/3}}
        size="sm">
        <ModalBody style={{justifyContent: 'center', textAlign: 'center'}}>
          <img src={qr === 'H' ? "content/images/QR_huy.jpg" : "content/images/QR_ut.jpg"} alt="" className='test1' />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => toggle(null)} >
            Đóng
          </Button>
        </ModalFooter>
      </Modal>
    </Row>
  );
};

export default Home;
