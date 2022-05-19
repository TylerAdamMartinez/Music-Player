import React from 'react';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import AudioPlayerComponent from '../../components/AudioPlayer';
import RecentlyPlayed from './RecentlyPlayed';
import '../../styles/homestyle.css';


function Home() {
  let songs = [
      {
          id: 0,
          artist: 'Voodoo Suite',
          title: 'Little Grass Shack',
          path: '../assets/01 Voodoo Suite - Little Grass Shack.mp3'
      },
      {
          id: 1,
          artist: 'Ken Hamm',
          title: 'Buckbreak',
          path: '../assets/02 Ken Hamm - Buckbreak.mp3'
      },
      {
          id: 2,
          artist: 'The Trumpeteers',
          title: 'Litter Wooden Church',
          path: '../assets/03 The Trumpeteers - Little Wooden Church.mp3'
      },
      {
          id: 3,
          artist: 'Jackson F. Smith',
          title: 'Cantina Rag',
          path: '../assets/04 Jackson F. Smith - Cantina Rag.mp3'
      },
      {
          id: 4,
          artist: 'Studio Noir',
          title: 'Our Little Hearts Like Saturn',
          path: '../assets/05 Studio Noir - Our Little Hearts Like Saturn.mp3'
      },
      {
          id: 5,
          artist: 'Teddy and Marge',
          title: 'Dark Eyes',
          path: '../assets/06 Teddy and Marge - Dark Eyes.mp3'
      },
      {
          id: 6,
          artist: 'Hr jothipala',
          title: 'Ran Eta Pota Ridee Hawadi',
          path: '../assets/07 HR Jothipala - Ran Eta Pota Ridee Hawadi.mp3'
      },
      {
          id: 7,
          artist: 'The Anchorites',
          title: 'Kingsfold',
          path: '../assets/08 The Anchorites - Kingsfold(untrad.).mp3'
      },
      {
          id: 8,
          artist: 'Ludwigs Steirische Gaudi',
          title: 'Bin hier Zuhause',
          path: '../assets/09 Ludwigs Steirische Gaudi - Bin hier Zuhause (ID 02).mp3'
      },
      {
          id: 9,
          artist: 'lobo Loco',
          title: 'Old River Boat',
          path: '../assets/10 Lobo Loco - Old River Boat (ID 1368).mp3'
      },
      {
          id: 10,
          artist: 'Xylo-Ziko',
          title: 'peril',
          path: '../assets/11 Xylo-Ziko - peril.mp3'
      },
      {
          id: 11,
          artist: 'Crowander',
          title: 'Humbug',
          path: '../assets/12 Crowander - Humbug.mp3'
      },
      {
          id: 12,
          artist: 'Marcos H. Bolanos',
          title: 'Rain-Soaked Window',
          path: '../assets/13 Marcos H. Bolanos - Rain-Soaked Window.mp3'
      },
      {
          id: 13,
          artist: 'Robert John',
          title: 'Surface',
          path: '../assets/14 Robert John - Surface.mp3'
      },
      {
          id: 14,
          artist: 'Monolog Rockstars',
          title: 'At the Restaurant',
          path: '../assets/15 Monolog Rockstars - At The Restaurant.mp3'
      }
    ]

  let songsJSX = songs.map((song) => { 
    return( 
      <div className='storageBoxText' key={song.id} value={song.path} onClick={() => {
        enqueue( array => [...array, song]);
        setSongTitles( array => [...array, song.title]);
        setSongIDs(array => [...array, song.id]);
      }}>
        {song.artist} - {song.title}
      </div>); 
  });

  let [songIDs, setSongIDs] = useState([]);
  let [songTitles, setSongTitles] = useState([]);
  let [queue, enqueue] = useState([]);

  return (
    <div>
      <div className="container">
        
        <div className="header">
        <h1 className="homeHeader">Music Player</h1>
        </div>
        
        <FaBars className="menuIcon" />

        <div className="allSongs">
          <div className = 'songsContainer'>
                <h1 className="audioListTitleText">All Songs</h1>
                <div className = 'songsStorageBox'>
                    { songsJSX }
                </div>
            </div>
        </div>

        <div className="recentlyPlayed" >
        <RecentlyPlayed playlist={queue} />
        </div>

        <div className="footer">
        <AudioPlayerComponent songIDs={songIDs} songTitles={songTitles} />
        </div>

        <style>{'body { background-color: #100F0F; }'}</style>
      </div>  
    </div>
  );
}

export default Home;
