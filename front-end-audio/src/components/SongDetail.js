import React, { Component } from 'react';
import '../App.css';


class SongDetail extends Component {
    state= {
        index:null
    }
  render() {
      //find individual song based on props
     const song = this.props.allSongs.find((song) => {
         return song.title === this.props.match.params.title
     })
     //find index of individual song to pass to currentSong on <Home />
     const index = this.props.allSongs.indexOf(song)
    return (
      <div>
        <div className="list__individual--background"></div>
        <img src={song.image} alt={song.album} className="detail__album--size" />
        <p>Title: {song.title} </p>
        <p>Album: {song.album}</p>
        <p>Artist: {song.artist}</p>
        <div className="fas fa-play-circle" onClick={() => {this.props.chooseSong(index)}}>

        </div>
      </div>
    );
  };
};

export default SongDetail;