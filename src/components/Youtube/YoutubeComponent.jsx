import React from 'react';
import './YoutubeComponent.css';

function YoutubeComponent(props) {
  return (
      <div className="youtube-wrapper">
        <div className="img-thumb">
          <img src="../yt.jpg" alt="thumbnail" />
          <p className="time">{props.time}</p>
        </div>
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
      </div>
  );
}

YoutubeComponent.defaultProps = {
  time: '00:00',
  title: 'Title',
  desc: 'Description'
}

export default YoutubeComponent;