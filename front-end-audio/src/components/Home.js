import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import axios from "axios";
import '../App.css';
import SongDetail from "./SongDetail";
import SongList from "./SongList";
import Header from "./Header";
import Footer from "./Footer";

class Home extends Component {
  state = {
    currentSong: 0,
    allSongs:[],
    loading:true,
    play:false
  };

  // Get songs from server.js and set page as loaded
  componentDidMount() {
    axios.get("http://localhost:8080")
    .then ((res) => {
      let songs = res.data
      this.setState({
        allSongs: songs,
        loading:false,
      })
    })
    .catch((err) => {
      console.log(err)
    })
  };

  //Called from detail and list.  Change current song and set play for autoplay and button
  chooseSong = (i) => {
    this.setState({
      currentSong: i,
      play:true
    })
  };

  //Called from footer. Set play to true or false for autoplay and button
  statePlay = (boolean) => {
    this.setState({
      play:boolean
    })
  }

  next = () => {
    let currentSong = this.state.currentSong
    //if this song is the last song, go back to the beginning
    if(this.state.currentSong < this.state.allSongs.length -1) {
      this.setState({currentSong: currentSong + 1})
    } else if (this.state.currentSong >= this.state.allSongs.length -1) {
      this.setState({currentSong: 0})
    };
  };
  previous = () => {
    let currentSong = this.state.currentSong
    //if this song is the first son, go to the end
    if (this.state.currentSong > 0) {
      this.setState({currentSong: currentSong -1})
    } else if (this.state.currentSong === 0) {
      this.setState({currentSong: this.state.allSongs.length -1})
    };
  };
  
  render() {
    const {allSongs} = this.state
    return (
      <div>
        {this.state.loading
        ? <h1>Loading...</h1>
        : <div>
            <Header 
              currentSong={allSongs[this.state.currentSong]}
            />
            <Switch>
              <Route 
                path="/player/detail/:title" 
                render={({match}) => <SongDetail 
                  allSongs={allSongs} 
                  match={match} 
                  chooseSong={this.chooseSong}/>} 
              />
              <Route 
                path="/player/list" 
                exact render={(props) => <SongList 
                  allSongs={allSongs} 
                  props={props}  
                  chooseSong={this.chooseSong}/>}
              />
            </Switch>
            <Footer 
              currentSong={allSongs[this.state.currentSong]} 
              statePlay={this.statePlay}
              next={this.next} 
              previous={this.previous}
              play={this.state.play}
            />
          </div>
        }
      </div>
        
    );
  };
};

export default Home;