import React from 'react';
import './index.scss';

class AppCamera extends React.Component {
  constructor(props){
    super(props);

    this.getUserMedia = this.getUserMedia.bind(this);
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    this.capture = this.capture.bind(this);
  }

  getUserMedia(constraints, success, error) {
    if (navigator.mediaDevices.getUserMedia) {
      //最新的标准API
      navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
    } else if (navigator.webkitGetUserMedia) {
      //webkit核心浏览器
      navigator.webkitGetUserMedia(constraints, success, error)
    } else if (navigator.mozGetUserMedia) {
      //firfox浏览器
      navigator.mozGetUserMedia(constraints, success, error);
    } else if (navigator.getUserMedia) {
      //旧版API
      navigator.getUserMedia(constraints, success, error);
    }
  }

  success(stream) {
    //兼容webkit核心浏览器
    let CompatibleURL = window.URL || window.webkitURL;
    //将视频流设置为video元素的源
    console.log(stream);

    //video.src = CompatibleURL.createObjectURL(stream);
    this.video.srcObject = stream;
    this.video.play();
  }

  error(error) {
    console.log(`访问用户媒体设备失败${error.name}, ${error.message}`);
  }

  componentDidMount() {
    if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
      //调用用户媒体设备, 访问摄像头
      this.getUserMedia({ video: { width: 480, height: 320 } }, this.success, this.error);
    } else {
      alert('不支持访问用户媒体');
    }
  }

  capture(){
    let context = this.canvas.getContext('2d');
    context.drawImage(this.video, 0, 0, 480, 320);
  }

  render() {
    return (
      <div className="AppCamera">
        <video id="video" controls ref={ el => this.video = el }></video>
        <div>
          <button id="capture" onClick={this.capture}>拍照</button>
        </div>
        <canvas id="canvas" width="480" height="320" ref={ el => this.canvas = el }></canvas>
      </div>
    );
  }

}

export default AppCamera;
