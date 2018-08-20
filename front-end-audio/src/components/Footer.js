import React, {Component} from "react";

class Footer extends Component {
    state = {
      progress: 0,
      duration: 0,
    };
    
    //if the player is paused but you click play next to a song, trigger the media player
    componentDidUpdate() {
        if (this.player.ended) {
            this.props.next()
        }
        if (this.props.play) {
            this.player.play()
        }
    }
    playPause = () => {
      if (this.props.play === false) {
        this.player.play()
        this.props.statePlay(true)
      }
      else if (this.props.play === true) {
        this.player.pause()
        this.props.statePlay(false)
      };
    };  

    progressValue = () => {
      let progress = this.player.currentTime / this.player.duration
      let duration = this.player.duration
      this.setState({
        progress,
        duration
      })
    }
    
    render () {
      return (
        <div className="main__footer--position main__footer--background">
          <audio 
            src={this.props.currentSong.src} 
            ref={(element) => this.player = element} 
            autoPlay={this.props.play}
            onTimeUpdate={this.progressValue}>
          </audio>
  
            <div 
              className="fas fa-backward" 
              onClick={this.props.previous} >
            </div>
  
            <div 
              className={this.props.play ? "fas fa-pause-circle" : "fas fa-play-circle"} 
              onClick={this.playPause}>
            </div>
            
            <div 
              className="fas fa-forward" 
              onClick={this.props.next}>
            </div>
            <br />
            <div>
              <progress value={this.state.progress} max="1" />
            </div>
        </div>
      )
    };
  };

export default Footer;