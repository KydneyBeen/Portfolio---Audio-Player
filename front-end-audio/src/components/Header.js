import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
      return (
        <div className="col main__header--background main__header--position">
          <span className="all__text--emphasis">
            Now Playing: 
          </span>
          <br />
          <span className="marquee">
          <span>
          {this.props.currentSong.title} ({this.props.currentSong.album}) - {this.props.currentSong.artist}
          </span>
          </span>
          <br />
          <Link to="/player/list">List View </Link>
           | 
          <Link to={`/player/detail/${this.props.currentSong.title}`} > Detail View </Link>
  
        </div>
      )
    };
  };

  export default Header;