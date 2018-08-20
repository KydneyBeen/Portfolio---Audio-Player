import React, { Component } from 'react';
import {Link} from "react-router-dom"
import '../App.css';


class SongList extends Component {
    render() {
        let songItems = this.props.allSongs.map((song, i) => {
            let index = i
            return (
                <div className="list__individual--background" key={song.title}>
                    
                    <div className="list__individual--album">
                        <img src={song.image} alt={song.album} className="list__individual--album" width="85px"/>
                    </div>
                    <Link to={`/player/detail/${song.title}`} >
                    <div className="list__individual--info">
                        <span>Title: {song.title}</span>
                        <br />
                        <span>Album: {song.album}</span>
                        <br />
                        <span>Artist: {song.artist}</span>
                    </div>
                    </Link>
                    <div className={"fas fa-play-circle"} onClick={(i) => {this.props.chooseSong(index)}}>

                    </div>
                </div>
                
            )
        })
      return (
        <div>
            <div className="list__individual--background"></div>
            {songItems}
            <div className="list__individual--background"></div>

        </div>
      )
    };
};

export default SongList;