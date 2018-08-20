const express = require ("express");
const app = express();
const cors = require ("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.send(songs)
});

app.listen(8080, () => {
    console.log("Listening on port 8080")
});

const songs = [
    {
      title:"Holiday",
      src:"/music/Holiday.mp3",
      image:"/images/American Idiot.jpg",
      album:"American Idiot",
      artist:"Green Day"
    },
    {
      title:"American Idiot",
      src:"/music/American Idiot.mp3",
      image:"/images/American Idiot.jpg",
      album:"American Idiot",
      artist:"Green Day"
    },
    {
      title:"Wake Me Up When September Ends",
      src:"/music/Wake Me Up When September Ends.mp3",
      image:"/images/American Idiot.jpg",
      album:"American Idiot",
      artist:"Green Day"
    },
    {
      title:"Killing Strangers",
      src:"/music/Killing Strangers.mp3",
      image:"/images/Pale Emperor.jpg",
      album:"Pale Emperor",
      artist:"Marilyn Manson"
    },
    {
      title:"mOBSCENE",
      src:"/music/mOBSCENE.mp3",
      image:"/images/Golden Age Of Grotesque.jpg",
      album:"Golden Age Of Grotesque",
      artist:"Marylin Manson"
    },
    {
      title:"Prison Song",
      src:"/music/Prison Song.mp3",
      image:"/images/Toxicity.jpg",
      album:"Toxicity",
      artist:"System of a Down"
    },
    {
      title:"Tattooed in Reverse",
      src:"/music/Tattooed in Reverse.mp3",
      image:"/images/Heaven Upside Down.jpg",
      album:"Heaven Upside Down",
      artist:"Marilyn Manson"
    },  
    {
      title:"Toxicity",
      src:"/music/Toxicity.mp3",
      image:"/images/Toxicity.jpg",
      album:"Toxicity",
      artist:"System of a Down"
    }
  ]