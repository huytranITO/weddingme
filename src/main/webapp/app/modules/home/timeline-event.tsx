import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'reactstrap';

export const TimeLineEvent = () => {
    return (
    <VerticalTimeline
      layout= '2-columns'
    >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="10h, Ngày 12/05/2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='left'
          icon={<FontAwesomeIcon style={{width: 'auto'}} icon="heart" color='red'/>}
        >
          <span className="vertical-timeline-element-title">Lễ ăn hỏi</span>
          <p className="vertical-timeline-element-subtitle">Nhà ông Lê Thanh Khôi</p>
          <p className="vertical-timeline-element-subtitle">Bà Hồ Thị Bình</p>
          <br />
          <p>
          Xóm Liên Sơn, Phúc Thành, Yên Thành, Nghệ An
          </p>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="10h30, Ngày 13/05/2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='left'
          icon={<FontAwesomeIcon style={{width: 'auto'}} icon="heart" color='red'/>}
        >
          <span className="vertical-timeline-element-title">Lễ cưới nhà trai</span>
          <p className="vertical-timeline-element-subtitle"> Nhà ông Trần Thọ Đức</p>
          <p className="vertical-timeline-element-subtitle"> Bà Nguyễn Thị Hoàng</p>
          <br />
          <p>
            Xóm Xuân Sơn, Phúc Thành, Yên Thành, Nghệ An
          </p>
          <Row style={{marginTop: 10, height: 300}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5269.644198205739!2d105.46996931877129!3d19.030776125324785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31376718f88626a7%3A0xcbde117e15918776!2zTmjDoCDEkOG7qWMgSG_DoG5n!5e1!3m2!1svi!2sus!4v1714883620929!5m2!1svi!2sus"  allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
          </Row>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="08h, Ngày 13/05/2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='right'
          icon={<FontAwesomeIcon style={{width: 'auto'}} icon="heart" color='red'/>}
        >
          <span className="vertical-timeline-element-title">Lễ cưới nhà gái</span>
          <p className="vertical-timeline-element-subtitle"> Nhà ông Lê Thanh Khôi</p>
          <p className="vertical-timeline-element-subtitle">Bà Hồ Thị Bình</p>
          <br />
          <p>
            Xóm Liên Sơn, Phúc Thành, Yên Thành, Nghệ An
          </p>
          <Row style={{marginTop: 20, height: 300}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1317.3722098068176!2d105.46430143791936!3d19.035672726705243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31376780e88cd6bb%3A0xd653a6b5154fa6e0!2zTmjDoCBLaMO0aSBCw6xuaA!5e1!3m2!1svi!2sus!4v1714883700521!5m2!1svi!2sus" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Row>
        </VerticalTimelineElement>
      </VerticalTimeline>)
}