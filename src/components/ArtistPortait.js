import React from 'react';
import Song from "../assets/music/Narsie.mp3";

const ArtistPortrait = props => {

    const [isPlaying, setIsPlaying] = React.useState(false)
    const [iconChanged, setIsIconChanged] = React.useState('playButton')

    function playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0];
        audioEl.play();
        setIsPlaying(true);
        setIsIconChanged('playButtonPlaying');

    }
    function pauseAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0];
        audioEl.pause();
        setIsPlaying(false); 
        setIsIconChanged('playButton');
    }


  return (
    <div
      style={{
        margin: "2rem",
        display: "flex",
        flexDirection: "column"
      }}
   
    >
      <img className="portraitStyle" src={`${props.portraitImage}`} />
      {/* <ReactAudioPlayer
        src={Song}
             autoPlay={true}
        controls={true}
        style={{
          position: "absolute"
        }}
            //   onCanPlayThrough={() => {
            //       alert(3)
            //   }}
      /> */}
          <audio className="audio-element">
              <source src={Song}></source>
          </audio>
          <button
              className={iconChanged}
              onClick={() => {
               isPlaying? pauseAudio() : playAudio()
              }}
          ></button>
    </div>
  );
};

export default ArtistPortrait;
