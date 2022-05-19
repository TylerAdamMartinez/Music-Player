import React from 'react';
import SongList from '../../components/Songs'
import '../../styles/homestyle.css'

function AllSongs() {
  return (
    <div className = 'songsContainer'>
        <h1 className="audioListTitleText">All Songs</h1>
        <div className = 'songsStorageBox'>
          <div>
            <SongList/>
          </div>
        </div>
    </div>
  )
}

export default AllSongs;

