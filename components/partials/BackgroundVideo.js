import React from 'react';
import '../../style.css'
import videojs from 'video.js'

export default class backgroundVideo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <video id="my-video" fluid loop muted autoPlay preload="auto" poster="MY_VIDEO_POSTER.jpg" data-setup="{}">
            <source src="/static/Timelapse.mp4" type='video/mp4'></source>
            <p className="vjs-no-js">
              To view this video please enable JavaScript, and consider upgrading to a web browser that
              <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
            </p>
        </video>
      </>
    );
  }
}
