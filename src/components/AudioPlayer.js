import { TiMediaRewind, TiMediaFastForward, TiMediaPlay, TiMediaPause } from 'react-icons/ti';
import { useState, useEffect, useRef } from 'react';
import '../styles/audioplayer.css';
import song0 from '../assets/01 Voodoo Suite - Little Grass Shack.mp3';
import song1 from '../assets/02 Ken Hamm - Buckbreak.mp3';
import song2 from '../assets/03 The Trumpeteers - Little Wooden Church.mp3';
import song3 from '../assets/04 Jackson F. Smith - Cantina Rag.mp3';
import song4 from '../assets/05 Studio Noir - Our Little Hearts Like Saturn.mp3';
import song5 from '../assets/06 Teddy and Marge - Dark Eyes.mp3';
import song6 from '../assets/07 HR Jothipala - Ran Eta Pota Ridee Hawadi.mp3';
import song7 from '../assets/08 The Anchorites - Kingsfold(untrad.).mp3';
import song8 from '../assets/09 Ludwigs Steirische Gaudi - Bin hier Zuhause (ID 02).mp3';
import song9 from '../assets/10 Lobo Loco - Old River Boat (ID 1368).mp3';
import song10 from '../assets/11 Xylo-Ziko - peril.mp3';
import song11 from '../assets/12 Crowander - Humbug.mp3';
import song12 from '../assets/13 Marcos H. Bolanos - Rain-Soaked Window.mp3';
import song13 from '../assets/14 Robert John - Surface.mp3';
import song14 from '../assets/15 Monolog Rockstars - At The Restaurant.mp3';

function AudioPlayerComponent(props) {
  let songsList = [
    song0,
    song1,
    song2,
    song3,
    song4,
    song5,
    song6,
    song7,
    song8,
    song9,
    song10,
    song11,
    song12,
    song13,
    song14
  ];

  let [songTitle, setSongTitle] = useState("");
  let [songID, setSongID] = useState(0);
  let [index, setIndex] = useState(0);
  useEffect(() => {
    if (index > props.songIDs.length -1) {
      setIndex(0);
    } else if (index < 0) {
      setIndex(props.songIDs.length - 1);
    }
  }, [index, props.songIDs.length]);

  let [source, setSource] = useState(songsList[0]);
  let myAudio = useRef(new Audio());

  const updateSong = (source) => {
    if(myAudio.current){
      myAudio.current.pause();
      myAudio.current = new Audio(source);
      myAudio.current.load();
      myAudio.current.play();
    }
  }

  useEffect(() => {
    setSongID(props.songIDs.at(index));
    setSongTitle(props.songTitles.at(index));
    setSource(songsList.at(songID));
    updateSong(source)
  }, [index, songID, songTitle, songsList, source, props.songIDs, props.songTitles]);

  return (
  <div>
    <div className="audioPlayerContainer">
      <div className="abovePlayer">
        <TiMediaRewind className="leftArrow" onClick={() => { 
          setIndex(index - 1);
        }} />
          <div className="currentSong">
            { songTitle }
          </div>
        <TiMediaFastForward className="rightArrow" onClick={() => { 
          setIndex(index + 1);
        }}/>
        <div className="audioMiddle">
          <TiMediaPlay className="leftArrow" onClick={() => {myAudio.current.play()}}/>
          <TiMediaPause className="rightArrow" onClick={() => {myAudio.current.pause()}}/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default AudioPlayerComponent;
