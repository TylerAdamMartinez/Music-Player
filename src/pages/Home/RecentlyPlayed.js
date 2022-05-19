import React from 'react';
import '../../styles/homestyle.css';

function RecentlyPlayed(props) {
  let heart = props.playlist.map((song) => { 
    /*this.item=[];
    this.item.push(song.id);
    
    for(let i = 0; i<this.item.length; i++)
    {console.log("HELP");
      if(this.item[i] === song.id){
        return(
          <div className='storageBoxText'>
            Flag
          </div>);
      }
    }*/
        return( 
        <div className='storageBoxText' key={song.id} value={song.path}>
          {song.artist} - {song.title}
        </div>);
     
  }); //Still Trying to figure this out, sorry
  return (
    <div className = 'songsContainer'>
        <h1 className="audioListTitleText">My Queue</h1>
        <div className = 'songsStorageBox'>
          <div className = 'storageBoxText'>{heart}</div>
        </div>
    </div>
  )
}

export default RecentlyPlayed;
